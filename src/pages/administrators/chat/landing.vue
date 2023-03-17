<template>
    <div>
    <div class="q-pa-sm col-12 text-center">
      <q-select 
          color="accent" 
          outlined label-color="accent"
          v-model="category"
          :options ="categories"
          @input="onItemValueChanged"
          label="Category"
          >
      </q-select>
    </div>
        <q-list 
        v-if="!showSpinner"
        bordered separator
        class="bg-primary q-pa-none q-ma-none">
            <q-item clickable v-ripple
             v-for="card in cardList"
            :key="card.idd"
            class="q-pa-none q-ma-none">
                <RecentChat
                :selectedRow="card"
                :fileUrl="card.friendImage"
                :title="card.fullName"
                :description="card.content"
                :date="card.createdDate"
                :noUnreadMessages="card.noUnreadMessages"
                @viewChat="viewChat($event)"/>
            </q-item>
        </q-list>
        <div 
        v-show="showSpinner"
        class="q-gutter-md row">
            <div class="col-12 q-pa-sm absolute-center flex flex-center">
                <q-spinner
                    color="accent"
                    :size="spinnerSize"
                    :thickness="spinnerThickness"
                />
            </div>
        </div>

        <q-dialog 
            v-for="dialog in dialogs" 
            :key="dialog.title"
            v-model="dialog.isVisible">
            <MessageBox
            :title="dialog.title"
            :message="dialog.message"
            :okayEvent="dialog.okayEvent"
            :cancelEvent="dialog.cancelEvent"
            @cancelDialog="cancelDialog($event)"
            @okDialog="okDialog($event)"
            >
            </MessageBox>
        </q-dialog>
    </div>
</template>

<script>
  import RecentChat from "../../../components/Chat/RecentChat.vue";
  import MessageBox from "../../../components/dialogs/MessageBox.vue";
  import { get, remove, post } from "../../../store/modules/gcp-services";
    export default {
      computed:{
          showSpinner(){
            return this.$store.getters["authenticationStore/showSpinner"];
        },
        spinnerSize(){
            return this.$store.getters["authenticationStore/spinnerSize"];
        },
        spinnerThickness(){
            return this.$store.getters["authenticationStore/spinnerThickness"];
        }
      },
      components:{
        RecentChat,
        MessageBox
      },
    data () {
    return {
            cardList: [],
            fromUser: {},
            categories: [
                "CategoryN500",
                "CategoryN1000",
                "CategoryN2000",
                "CategoryN5000",
                "CategoryN10000"
            ],
            category: "CategoryN500",
            tableVM: {
                selectedFileModel: {},
                title: "Stories",
                columns: [
                    { name: "actions", label: "Actions", field: "", align: "left", type: "" },
                    { name: "message", label: "Message", field: "", align: "left", type: "text" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createStory",
                updateItem: "updateItem",
                deleteItem: "deleteStory",
                createItemUrl: "/create-chat",
                updateItemUrl: "/update-chat",
                },
                dialogs:[
                { title: "Delete Story", isVisible: false, message: "Do you want to delete a story",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Story deleted successfully!",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Failure", isVisible: false, message: "",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
            ],
            recentChats: [
            {
                friendImage: "/statics/images/levels.jpg",
                friendFullName: "John Williams",
                fromId: "",
                toId: "",
                groupName: "Chat",
                message: "Who do you think will emerge the president of Nigeria in the forthcoming 2023 election",
                meetingId: "",
                schoolId: "",
                createdAt: Date.now()
            },
            {
                friendImage: "/statics/images/sessions.jpg",
                friendFullName: "Austin Ore",
                fromId: "",
                toId: "",
                groupName: "Story",
                message: "In my own statistics, Peter Obi will emerge as the president of Nigeria",
                meetingId: "",
                schoolId: "",
                createdAt: Date.now()
            }
        ],
            }
        },
        methods: {
          okayEvent(){
            var context = this;
            context.isFetchTableDialog = false
          },
          cancelEvent(){
            var context = this;
            context.isFetchTableDialog = false
          },
         createFileModel(){
             var context = this;
             console.log(context.tableVM.createItemUrl)
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateItem(selectedFileModel){
             var context = this;
             this.$store.commit('FileModelStore/SetSelectedFileModel', selectedFileModel)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteFileModel(selectedFileModel){
             var context = this;
             context.selectedFileModel = selectedFileModel;
             console.log(context.selectedFileModel)
             context.dialogs[0].isVisible = true;
          },
          cancelDialog(payload){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async delete(){
            var context = this;
            
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            var url = `filemanagement/${context.selectedFileModel.id}/${user.schoolId}`;
            const payload = {
                url,
            }
            console.log("payload: ", payload)
            var response = await remove(payload)
            const { 
                data : {
                    message,
                    success,
                }
            } = response
            if(success){
                context.dialogs[1].isVisible = true;
            }else{
                context.dialogs[2].message = message;
                context.dialogs[2].isVisible = true;
            }
        },
        async okDialog(payload){
            console.log("payload: ", payload)
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                        case "Delete FileModel":
                            await context.delete();
                            break;
                        case "Success":
                            await context._loadRecentChats()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async _loadRecentChats(){
                var context = this;
                context.cardList = []

            switch(context.category){
            case "CategoryN500":
                context.fromUser = this.$store.getters['authenticationStore/categoryN500User'];
            break;
            case "CategoryN1000":
                context.fromUser = this.$store.getters['authenticationStore/categoryN1000User'];
            break;
            case "CategoryN2000":
                context.fromUser = this.$store.getters['authenticationStore/categoryN2000User'];
            break;
            case "CategoryN5000":
                context.fromUser = this.$store.getters['authenticationStore/categoryN5000User'];
            break;
            case "CategoryN10000":
                context.fromUser = this.$store.getters['authenticationStore/categoryN10000User'];
            break;
            }

                const payload = {
                    url: "launchstory/uniqueMessagesByFriends",
                    req: {
                        id: context.fromUser.categoryId,
                        selectedCategory: context.category,
                    }
                }

                console.log("payload: ", payload)
                const response = await post(payload) 
                console.log("response: ",response)
                if(response.data.length > 0){
                    context.cardList = response.data.map((row, i) => {
                        let  description = row.message;
                        if(description.length > 50){
                            description = row.message.substr(0, 50);
                        }
                        return {
                            idd: i+1,
                            ...row,
                            fullName: row.fromFullName,
                            noUnreadMessages: "1",
                            name: "showPage",
                            createdDate: (new Date(row.createdAt)).toDateString(),
                            qBtns: [],
                            content: description + "..."
                        }
                    })
                }
                //context.tableVM.rows = result;
                //console.log("result: ", result)
            },
          async onItemValueChanged() {
            var context = this;
            await context._loadRecentChats();
      
          },
          viewChat(selectedRow){
              var context = this;
            selectedRow.categoryId = selectedRow.fromId
            selectedRow.username = selectedRow.fromUserName
              console.log("selectedRow: ", selectedRow)
              this.$store.commit('authenticationStore/setToUser', selectedRow)
                this.$store.commit('dashboardStore/setSelectedCategory', context.category)
              this.$router.push("/view-chat")
          },
        },
        async created() {
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            if(user.schoolId === "CEO"){
                context.tableVM.createItemUrl = "/socialize-create-story";
                context.tableVM.updateItemUrl = "/socialize-update-story";
            }
            context.category = this.$store.getters["dashboardStore/selectedCategory"];
            await context._loadRecentChats()
      }
    }
</script>