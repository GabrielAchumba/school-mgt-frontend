<template>
    <div>
        <Form
        :formData="form"
        @onDesignationSelected="onDesignationSelected"/>

    <div 
     v-if="!showSpinner"
    class="q-pa-sm col-12 text-center">
        <div 
            v-for="card in cardList"
            :key="card.idd"
            class="row bg-primary q-pa-none q-ma-none">
             <RecentChat
                class="q-pa-sm col-12"
                :selectedRow="card"
                :fileUrl="card.friendImage"
                :title="card.fullName"
                :description="card.content"
                :date="card.createdDate"
                :noUnreadMessages="card.noUnreadMessages"
                @viewChat="viewChat($event)"/>
        </div>

    </div>
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
    </div>
</template>

<script>
  import RecentChat from "../../../components/Chat/RecentChat.vue";
  import { post } from "../../../store/modules/gcp-services";
  import { form } from "./view_models/landingVM";
  import { loadStaffs } from "../staff/utils";
  import Form from "../../../components/Forms/Form.vue"
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
        Form,
      },
    data () {
    return {
            cardList: [],
            form: form,
            selectedDesignation: {},
            }
        },
        methods: {
        async _loadRecentChats(){
            var context = this;
            context.cardList = []
           var user = this.$store.getters["authenticationStore/IdentityModel"]
                const payload = {
                    url: "story/uniqueMessagesByFriends",
                    req: {
                        id: user.id,
                        selectedCategory: context.selectedDesignation.id,
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
          async onDesignationSelected(payload) {
            var context = this;
            context.selectedDesignation = context.form.qSelects[0].list.find(e => e.value === payload.value)
            await context._loadRecentChats();
      
          },
          viewChat(selectedRow){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            selectedRow.categoryId = selectedRow.fromId
            selectedRow.username = selectedRow.fromUserName
            console.log("selectedRow: ", selectedRow)
            this.$store.commit('authenticationStore/setToUser', selectedRow)
            this.$store.commit('authenticationStore/setSelectedDesignation', context.selectedDesignation)
            this.$router.push("/view-chat")
            switch(user.userType){
                case "Student":
                    this.$router.push("/student-view-chat")
                    break;
                case "Member":
                    this.$router.push("/member-view-chat")
                    break;
            }
          },
        },
        async created() {
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            const destinations = await loadStaffs(user.schoolId)
            context.form.qSelects[0].list = destinations.map((row) => {
                return {
                    ...row,
                    id: row._id,
                    name: row.type,
                    label: row.type,

                }
            })
            context.selectedDesignation = context.form.qSelects[0].list[0]
            context.form.qSelects[0].value = context.selectedDesignation.value
            await context._loadRecentChats()
      }
    }
</script>