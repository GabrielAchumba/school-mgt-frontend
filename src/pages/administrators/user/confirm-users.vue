<template>
  <div>
    <ComfirmUsers
    v-if="!showSpinner"
    :formData="form"
    :unConfirmedCardList="unConfirmedCardList"
    :confirmedCardList="confirmedCardList"
    :pages="pages"
    :pagesConfirmed="pagesConfirmed"
    @confirmUser="confirmUser($event)"
    @blockUser="blockUser($event)"
    @paginationAction="paginationAction($event)"
    @paginationActionConfirmed="paginationActionConfirmed($event)"
    @nextAction="nextAction($event)"
    @backAction="backAction($event)"
    @nextActionConfirmed="nextActionConfirmed($event)"
    @backActionConfirmed="backActionConfirmed($event)"
    @filterUnConfirmedUsers="filterUnConfirmedUsers($event)"
    @filterConfirmedUsers="filterConfirmedUsers($event)"/>
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
  import ComfirmUsers from "../../../components/Cards/ComfirmUsers.vue";
  import MessageBox from "../../../components/dialogs/MessageBox.vue";
  import { remove, put } from "../../../store/modules/services";
  import { loadPaginatedUsers, loadPaginatedConfirmedUsers, loadUnComfirmedUsers } from "./utils";
  import { form } from "./view_models/confirm-users-view-model";
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
        },
        isMobile(){
            const width = window.innerWidth;
            if(width < 700) return true;
            else return false;
        },
      },
      components:{
        ComfirmUsers,
        MessageBox
      },
        data () {
    return {
                unConfirmedCardList: [],
                confirmedCardList: [],
                dialogs:[
                    { title: "Confirm User", isVisible: false, message: "Do you want to confirm a user",
                    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                    { title: "Confirm User Success", isVisible: false, message: "User confirmed successfully!",
                    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                    { title: "Confirm User Failure", isVisible: false, message: "",
                    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                    { title: "Block User", isVisible: false, message: "Do you want to block a user",
                    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                    { title: "Block User Success", isVisible: false, message: "User blocked successfully!",
                    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                    { title: "Block User Failure", isVisible: false, message: "",
                    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                ],
                pages: [],
                page: 1,
                pagesConfirmed: [],
                pageConfirmed: 1,
                mobileAppStepper: 7,
                webAppStepper: 25,
                totalNumberOfUsers: 0,
                totalNumberOfConfirmedUsers: 0,
                limit: 0,
                confirmedUsers: [],
                unConfirmedUsers: [],
                paginatedUsers: [],
                selectedUser: {},
                form: form,
            }
        },
        methods: {
            async filterUnConfirmedUsers(filterUnConfirmedUser){
                var context = this;
                if(filterUnConfirmedUser === "") filterUnConfirmedUser = "@";
                await context._loadPaginatedUsers(1, filterUnConfirmedUser);
                
            },
            async filterConfirmedUsers(filterConfirmedUser){
                var context = this;
                if(filterConfirmedUser === "") filterConfirmedUser = "@";
                await context._loadPaginatedConfirmedUsers(1, filterConfirmedUser);
            },
          confirmUser(selectedUser){
            const context = this;
            context.selectedUser = selectedUser;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Confirm User"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
          },
            async confirmUserAsync(){
                var context = this;
                var user = this.$store.getters["authenticationStore/IdentityModel"]

                var url = `user/confirmuser/${context.selectedUser.id}`;
                const payload = {
                    url,
                    req: {
                        designationId: context.selectedUser.qSelect.value,
                        confirmedBy: user.id,
                    }
                }

                console.log("payload: ", payload)
                this.$store.commit("authenticationStore/setShowSpinner", true);
                var response = await put(payload)
                this.$store.commit("authenticationStore/setShowSpinner", false);

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
            blockUser(selectedUser){
                const context = this;
                context.selectedUser = selectedUser;
                var i = -1;
                for(const dialog of context.dialogs){
                    i++;
                    if(dialog.title == "Block User"){
                        context.dialogs[i].isVisible = true;
                        break;
                    }
                }
            },
            async blockUserAsync(){
                var context = this;
                var user = this.$store.getters["authenticationStore/IdentityModel"]

                var url = `user/blockuser/${context.selectedUser.id}`;
                const payload = {
                    url,
                    req: {
                        designationId: context.selectedUser.qSelect.value,
                        blockedBy: user.id,
                    }
                }

                console.log("payload: ", payload)
                this.$store.commit("authenticationStore/setShowSpinner", true);
                var response = await put(payload)
                this.$store.commit("authenticationStore/setShowSpinner", false);

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
        async okDialog(payload){
            console.log("payload: ", payload)
            const context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            var i = -1;
            let unConfirmedUsers = []
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                        case "Confirm User":
                            await context.confirmUserAsync()
                            break;
                        case "Block User":
                            await context.blockUserAsync()
                            break;
                        case "Confirm User Success":
                            await context._loadPaginatedUsers(context.page, context.form.filterUnConfirmedUser)
                            await context._loadPaginatedConfirmedUsers(context.pageConfirmed, context.form.filterConfirmedUser)
                            unConfirmedUsers = await loadUnComfirmedUsers(user.schoolId, "@");
                            this.$store.commit('userStore/setUnComfirmedUsers', unConfirmedUsers.result)
                            break;
                        case "Block User Success":
                            await context._loadPaginatedUsers(context.page, context.form.filterUnConfirmedUser)
                            await context._loadPaginatedConfirmedUsers(context.pageConfirmed, context.form.filterConfirmedUser)
                            unConfirmedUsers = await loadUnComfirmedUsers(user.schoolId, "@");
                            this.$store.commit('userStore/setUnComfirmedUsers', unConfirmedUsers.result)
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    if(payload.filter === "") payload.filter = "@"
                    context.form.filterUnConfirmedUser = payload.filter;
                    break;
                }
            }
        },
        async nextAction(payload){
            var context = this;
            let counter =  context.pages[0].sn;
            const firstSN = context.pages[0].sn;
            let counter2 = 0;
            context.pages = [];
            for(let j = (firstSN * context.limit); j < context.totalNumberOfUsers; j=j+context.limit){
                counter++;
                counter2++;
                if(context.isMobile){
                    if(counter2 > context.mobileAppStepper) break;
                }else{
                    if(counter2 > context.webAppStepper) break;
                }
                context.pages.push({
                    sn: counter,
                    isActive: false
                })
            }
            context.pages[0].isActive = true;
            if(payload.filter === "") payload.filter = "@"
            context.form.filterUnConfirmedUser = payload.filter;
            await context._loadUpdatedPaginatedUsers(context.pages[0], payload.filter);
        },
        async nextActionConfirmed(payload){
            var context = this;
            let counter =  context.pagesConfirmed[0].sn;
            const firstSN = context.pagesConfirmed[0].sn;
            let counter2 = 0;
            context.pagesConfirmed = [];
            for(let j = (firstSN * context.limit); j < context.totalNumberOfConfirmedUsers; j=j+context.limit){
                counter++;
                counter2++;
                if(context.isMobile){
                    if(counter2 > context.mobileAppStepper) break;
                }else{
                    if(counter2 > context.webAppStepper) break;
                }
                context.pagesConfirmed.push({
                    sn: counter,
                    isActive: false,
                })
            }
            context.pagesConfirmed[0].isActive = true;
            if(payload.filter === "") payload.filter = "@"
            context.form.filterConfirmedUser = payload.filter;
            await context._loadUpdatedPaginatedConfirmedUsers(context.pagesConfirmed[0], payload.filter);

        },
        async backAction(payload){

            var context = this;
            let counter = context.pages[0].sn - 2;
            if(counter < 1) counter = 0;
            let counter2 = 0;
            const lent = context.pages.length;
            const lastSN = context.pages[lent-1].sn;
            const firstSN = context.pages[0].sn - 1;
            context.pages = [];
            for(let j = (firstSN * context.limit); j < (lastSN * context.limit); j=j+context.limit){
                counter++;
                counter2++;
                if(context.isMobile){
                    if(counter2 > context.mobileAppStepper) break;
                }else{
                    if(counter2 > context.webAppStepper) break;
                }
                context.pages.push({
                    sn: counter,
                    isActive: false,
                })
            }
            context.pages[0].isActive = true;
            if(payload.filter === "") payload.filter = "@"
            context.form.filterUnConfirmedUser = payload.filter;
            await context._loadUpdatedPaginatedUsers(context.pages[0], payload.filter);
        },
        async backActionConfirmed(payload){

            var context = this;
            let counter = context.pagesConfirmed[0].sn - 2;
            if(counter < 1) counter = 0;
            let counter2 = 0;
            const lent = context.pagesConfirmed.length;
            const lastSN = context.pagesConfirmed[lent-1].sn;
            const firstSN = context.pagesConfirmed[0].sn - 1;
            context.pagesConfirmed = [];
            for(let j = (firstSN * context.limit); j < (lastSN * context.limit); j=j+context.limit){
                counter++;
                counter2++;
                if(context.isMobile){
                    if(counter2 > context.mobileAppStepper) break;
                }else{
                    if(counter2 > context.webAppStepper) break;
                }
                context.pagesConfirmed.push({
                    sn: counter,
                    isActive: false,
                })
            }
            context.pagesConfirmed[0].isActive = true;
            if(payload.filter === "") payload.filter = "@"
            context.form.filterConfirmedUser = payload.filter;
            await context._loadUpdatedPaginatedConfirmedUsers(context.pagesConfirmed[0], payload.filter);
        },
        async paginationAction(payload){
            var context = this;
            context.page = payload.page.sn;
            const filter = payload.filter;
            await context._loadPaginatedUsers(context.page, filter);
        },
        async paginationActionConfirmed(payload){
            var context = this;
            context.pageConfirmed = payload.page.sn;
            const filter = payload.filter;
            await context._loadPaginatedConfirmedUsers(context.pageConfirmed, filter);
        },
        async _loadUpdatedPaginatedUsers(page, filter){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            this.$store.commit("authenticationStore/setShowSpinner", true);
            context.page = page.sn;
            if(filter === "" || filter === undefined) filter = "@"
            const unConfirmedUsers = await loadUnComfirmedUsers(user.schoolId, filter);
            this.$store.commit('userStore/setUnComfirmedUsers', unConfirmedUsers.result)
            const { result, message } = await loadPaginatedUsers(user.schoolId, context.page, filter);
            const { paginatedUsers } = result
            this.$store.commit("authenticationStore/setShowSpinner", false);
            //this.$store.commit('userStore/SetUsers', paginatedUsers)
            context.unConfirmedUsers = [...paginatedUsers];

            context.unConfirmedCardList = context.unConfirmedUsers.map((row, i) => {
                return {
                    sn: i+1,
                    title: `${row.firstName} ${row.lastName}`,
                    description: row.userType,
                    image: row.fileUrl,
                    ...row,
                    qBtns:[
                        { label: "Confirm", btnDisabled: false,name: "confirmUser"},
                    ],
                    qSelect:  { 
                        label: "Designation *", 
                        value: row.designationId, 
                        type: "text", 
                        list: this.$store.getters["staffStore/staffs"].map((row) => {
                            return {
                                ...row,
                                type: row.type
                            }
                        }), 
                        actionName: "designationAction", 
                        visible: true }
                }
            })

        },
        async _loadUpdatedPaginatedConfirmedUsers(page, filter){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            this.$store.commit("authenticationStore/setShowSpinner", true);
            context.page = page.sn;
            if(filter === "" || filter === undefined) filter = "@"
            const unConfirmedUsers = await loadUnComfirmedUsers(user.schoolId, filter);
            this.$store.commit('userStore/setUnComfirmedUsers', unConfirmedUsers.result)
            const { result, message } = await loadPaginatedUsers(user.schoolId, context.page, filter);
            const { paginatedUsers } = result
            this.$store.commit("authenticationStore/setShowSpinner", false);
            //this.$store.commit('userStore/SetUsers', paginatedUsers)
            context.confirmedUsers = [...paginatedUsers];

            context.unConfirmedCardList = context.confirmedUsers.map((row, i) => {
                return {
                    sn: i+1,
                    title: `${row.firstName} ${row.lastName}`,
                    description: row.userType,
                    image: row.fileUrl,
                    ...row,
                    qBtns:[
                        { label: "Block", btnDisabled: false,name: "blockUser"}
                    ],
                    qSelect:  { 
                        label: "Designation *", 
                        value: row.designationId, 
                        type: "text", 
                        list: this.$store.getters["staffStore/staffs"].map((row) => {
                            return {
                                ...row,
                                type: row.type
                            }
                        }), 
                        actionName: "designationAction", 
                        visible: true }
                }
            })

        },
        async _loadPaginatedUsers(selectedPage, filter){
            var context = this;
            if(filter === "" || filter === undefined) filter = "@"
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            this.$store.commit("authenticationStore/setShowSpinner", true);
            const { result, message } = await loadPaginatedUsers(user.schoolId, selectedPage, filter);
            const { paginatedUsers, totalNumberOfUsers, limit } = result
            this.$store.commit("authenticationStore/setShowSpinner", false);
            //this.$store.commit('userStore/setUnComfirmedUsers', paginatedUsers)
            let counter = 0;
            context.pages = [];
            context.totalNumberOfUsers = totalNumberOfUsers;
            context.limit = limit;
            let isActive = false;
            for(let j = 0; j < totalNumberOfUsers; j=j+limit){
                counter++;
                if(context.isMobile){
                    if(counter > context.mobileAppStepper) break;
                }else{
                    if(counter > context.webAppStepper) break;
                }
                if(counter === selectedPage) isActive = true
                else isActive = false;
                context.pages.push({
                    sn: counter,
                    isActive,
                })
            }

            context.unConfirmedUsers = [...paginatedUsers];
            context.unConfirmedCardList = context.unConfirmedUsers.map((row, i) => {
                return {
                    sn: i+1,
                    title: `${row.firstName} ${row.lastName}`,
                    description: row.userType,
                    image: row.fileUrl,
                    ...row,
                    qBtns:[
                        { label: "Confirm", btnDisabled: false,name: "confirmUser"},
                    ],
                    qSelect:  { 
                        label: "Designation *", 
                        value: row.designationId, 
                        type: "text", 
                        list: this.$store.getters["staffStore/staffs"].map((row) => {
                            return {
                                ...row,
                                type: row.type
                            }
                        }), 
                        actionName: "designationAction", 
                        visible: true }
                }
            })

        },
        async _loadPaginatedConfirmedUsers(selectedPage, filter){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            this.$store.commit("authenticationStore/setShowSpinner", true);
            if(filter === "" || filter === undefined) filter = "@"
            const { result, message } = await loadPaginatedConfirmedUsers(user.schoolId, selectedPage, filter);
            const { paginatedUsers, totalNumberOfUsers, limit } = result
            this.$store.commit("authenticationStore/setShowSpinner", false);
            //this.$store.commit('userStore/SetUsers', paginatedUsers)
            let counter = 0;
            context.pagesConfirmed = [];
            context.totalNumberOfConfirmedUsers = totalNumberOfUsers;
            context.limit = limit;
            let isActive = false;
            for(let j = 0; j < totalNumberOfUsers; j=j+limit){
                counter++;
                if(context.isMobile){
                    if(counter > context.mobileAppStepper) break;
                }else{
                    if(counter > context.webAppStepper) break;
                }
                if(selectedPage === counter) isActive = true;
                else isActive = false;
                context.pagesConfirmed.push({
                    sn: counter,
                    isActive,
                })
            }

            context.confirmedUsers = [...paginatedUsers];
            context.confirmedCardList = context.confirmedUsers.map((row, i) => {
                return {
                    sn: i+1,
                    title: `${row.firstName} ${row.lastName}`,
                    description: row.userType,
                    image: row.fileUrl,
                    ...row,
                    qBtns:[
                        { label: "Block", btnDisabled: false,name: "blockUser"}
                    ],
                    qSelect:  { 
                        label: "Designation *", 
                        value: row.designationId, 
                        type: "text", 
                        list: this.$store.getters["staffStore/staffs"].map((row) => {
                            return {
                                ...row,
                                type: row.type
                            }
                        }), 
                        actionName: "designationAction", 
                        visible: true }
                }
            })

        },
        setBackRoute(){
              var user = this.$store.getters["authenticationStore/IdentityModel"];
              let backRoute= "";
              if(user.schoolId === "CEO")backRoute='/super-admin';
              else  backRoute = '/admin';
              this.$store.commit("authenticationStore/setBackRoute", backRoute);
          }
        },
        async created() {
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            context.form.filterUnConfirmedUser = "@";
            context.form.filterConfirmedUser = "@";
            await context._loadPaginatedUsers(1, context.form.filterUnConfirmedUser);
            await context._loadPaginatedConfirmedUsers(1, context.form.filterConfirmedUser);
            const unConfirmedUsers = await loadUnComfirmedUsers(user.schoolId, "@");
            console.log("unConfirmedUsers.result: ", unConfirmedUsers.result)
            this.$store.commit('userStore/setUnComfirmedUsers', unConfirmedUsers.result)
            this.$store.commit("authenticationStore/setActiveRoute", "unconfirmed-users");
            this.$store.commit("authenticationStore/setIsError", false);
            this.$store.commit("authenticationStore/setErrorMessages", "");
            context.setBackRoute();
            this.$store.commit("authenticationStore/setPageTitle", "Users");  

      }
    }
</script>