<template>
    <q-toolbar class="q-pa-none row bg-accent text-primary">
        <div class="col-12">
          <div class="row">
            <q-btn flat icon="arrow_back" class="text-capitalize" @click="goBack"/>
            <q-space />
            <!-- <q-btn flat dense round @click="create" avatar>
              <q-avatar 
                class="bg-primary text-accent"
                size="sm">
                <img :src="selectedLogo.fileUrl === undefined ? '/statics/newway.jpg' : selectedLogo.fileUrl">
                </q-avatar>
            </q-btn> -->
            <q-btn flat>
              {{ pageTitle }}
            </q-btn>
            
            
            <q-space />
             <!-- <PDFWriter/> -->
            <q-btn
                icon="menu"
                flat
                dense
                round>
                <q-menu fit>
                  <q-list dense class="text-accent text-caption bg-primary">
                    <q-item
                    v-for="(menuItem) in menuList" :key="menuItem.title" 
                    class="bg-primary text-accent"
                    clickable
                      @click="scrollToElement(menuItem.to)">
                          <q-item-section>
                          {{ menuItem.title}}
                          </q-item-section>
                      </q-item>
                  </q-list>
                </q-menu>
            </q-btn>
          <!--  <q-btn dense flat icon="close" @click="logOut"/> -->
            <q-btn
            :dense="dense"
            flat
              avatar>
                <q-avatar
                v-if="getIsUserPhoto()" 
                class="bg-primary text-accent">
                <q-img
                      :src="IdentityModel.fileUrl"
                    />
              </q-avatar>
              <q-btn v-else
              class="bg-accent text-primary"
              :dense="dense"
              flat>{{ IdentityModel.firstName }}</q-btn>
              <q-menu
                fit>
                          <q-list dense class="text-accent text-caption bg-primary flex flex-center">
                            <q-item
                                class="bg-primary text-accent">
                                <q-item-section avatar>
                                <div class="row text-center flex flex-center q-pb-lg">
                                  <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                                  <div 
                                  class="q-pa-md" style="font-family: Lato;" 
                                  avatar
                                  @click="updateUserProfile">
                                    <q-avatar 
                                    v-if="getIsUserPhoto()" 
                                    class="bg-primary text-accent">
                                      <q-img
                                          :src="IdentityModel.fileUrl"
                                        />
                                      </q-avatar>
                                      <q-avatar 
                                      v-else
                                      class="bg-accent text-primary">
                                        {{ IdentityModel.firstName.charAt(0) }}
                                      </q-avatar>
                                  </div>
                                  <div 
                                  class="q-pa-md" style="font-family: Lato;">
                                    <p class="bg-primary text-accent">
                                        {{ IdentityModel.firstName }} {{ IdentityModel.lastName }}
                                      </p>
                                      <p class="q-ma-sm"> {{ userSchool.schoolName }} </p>
                                  </div>
                                  </div>
                                </div>
                                </q-item-section>
                            </q-item>

                                <q-item
                                class="bg-primary accent-white">
                                <q-item-section avatar>
                                <div class="row text-center q-pa-sm">
                                  <q-btn 
                                      class="bg-accent text-primary" 
                                      size="12px" 
                                      :style="'min-height:auto; padding:1px;'" 
                                      dense icon="color_lens"
                                      @click="logOut">
                                          Logout
                                        </q-btn>
                                  </div>
                                </q-item-section>
                                </q-item>
                          </q-list>
                </q-menu>
            </q-btn>
          </div>
          <div
           v-if="isError"
           class="row">
             <q-btn 
              flat 
              dense 
              label="View Error" 
              class="text-center bg-red col-12"
              @click="showDialog"/>
          </div>
        </div>

        <q-dialog
          v-for="dialog in dialogs" 
          :key="dialog.title"
          v-model="dialog.isVisible">
          <MessageBox
            :title="dialog.title"
            :message="errorMessages"
            :okayEvent="dialog.okayEvent"
            :cancelEvent="dialog.cancelEvent"
            @cancelDialog="cancelDialog($event)"
            @okDialog="okDialog($event)"
          >
          </MessageBox>
        </q-dialog>
        
    </q-toolbar>
     
</template>

<script>
import PDFWriter from "./pdf-writer.vue";
import MessageBox from "../dialogs/MessageBox.vue";
export default {
    components:{
      PDFWriter,
      MessageBox,
    },
    computed:{
        isError(){
          const _isError = this.$store.getters['authenticationStore/isError']
          //console.log("isError: ", _isError)
          return _isError;
        },
        errorMessages(){
          const _errorMessages = this.$store.getters['authenticationStore/errorMessages'];
          //console.log("errorMessages: ", _errorMessages)
          return _errorMessages;
        },
        userSchool(){
            return this.$store.getters['schoolStore/userSchool'];
        },
        isAdmin(){
          return this.$router.history.current.fullPath !=='/admin';
        },
        IdentityModel() {
            return this.$store.getters['authenticationStore/IdentityModel'];
        },
        backRoute() {
            return this.$store.getters['authenticationStore/backRoute'];
        },
        selectedLogo(){
            return this.$store.getters['LogoStore/selectedLogo'];
        },
        pageTitle(){
          return this.$store.getters['authenticationStore/pageTitle'];
        },
        updateUserRoute() {
            return this.$store.getters['authenticationStore/updateUserRoute'];
        },
    },
    props:{
        menuList: {
            type: Array,
            default: []
        }
    },
    data(){
        return {
            visibilityIcon: "visibility",
            dense: false,
            dialogs: [{
              title: "Error Message",
              isVisible: false,
              message: "No Error",
              okayEvent: "okDialog", 
              cancelEvent: "cancelDialog"
            }]
        }
    },
    methods:{
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
        showDialog(){
          var context = this;
          context.dialogs[0].isVisible = true;
        },
        okDialog(payload){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                        case "Create Examination Question":
                            context.dialogs[i].isVisible = true;
                            break;
                        case "Success":
                            context.dialogs[i].isVisible = false;
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        logOut(){
            this.$emit("logoutUser");
        },
        scrollToElement(routename){
            this.$router.push(routename);

        },
        create(){
            const routename = this.$store.getters["authenticationStore/createURL"];
            console.log("routename: ", routename)
            this.$router.push(routename);
        },
        dataImport(){
          const routename = this.$store.getters["authenticationStore/importURL"];
            this.$router.push(routename);
        },
        getIsUserPhoto(){
            var context = this;
            if(context.IdentityModel.fileUrl != "" &&
            context.IdentityModel.fileUrl != undefined){
                return true
            }else{
                return false
            }
        },
        onSearch(){
            console.log("onSearch")
            this.$store.commit("authenticationStore/setGlobalSearchDialog", true)
        },
        goBack(){
            var context = this;
            console.log("context.backRoute: ", context.backRoute)
            this.$router.push(context.backRoute)
        },
        updateUserProfile(){
          var context = this;
          this.$router.push(context.updateUserRoute)
        }
    }
}
</script>