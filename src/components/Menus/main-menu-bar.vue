<template>
    <q-bar class="q-pa-none row bg-accent" >
        <q-btn flat dense round icon="settings" aria-label="Settings" />
        <q-btn flat dense round icon="create" @click="create"/>
        <q-btn flat dense round @click="create" avatar>
          <q-avatar 
            class="bg-primary text-accent"
            size="sm">
            <img src='/statics/newway.jpg'>
            </q-avatar>
        </q-btn>
        
        <q-space />
        <q-btn dense flat round icon="search" @click="onSearch" />
        <PDFWriter/>
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
                  :src="IdentityModel.base64String"
                />
  	      </q-avatar>
         <!--  <q-avatar
            v-else
            class="bg-accent text-primary"
            fit>
  	        {{ IdentityModel.firstName.charAt(0) }}
  	      </q-avatar> -->
          <q-btn v-else
          class="bg-accent text-primary"
          :dense="dense"
          flat>{{ IdentityModel.firstName }}</q-btn>
          <q-menu
            fit>
                      <q-list dense class="text-accent text-caption bg-primary">
                        <q-item
                            class="bg-primary text-accent">
                            <q-item-section avatar>
                            <div class="row text-center flex flex-center q-pb-lg">
                              <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                              <div 
                              class="q-pa-md" style="font-family: Lato;" 
                              avatar>
                                <q-avatar 
                                v-if="getIsUserPhoto()" 
                                class="bg-primary text-accent">
                                   <q-img
                                      :src="IdentityModel.base64String"
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
                            <div class="row text-center flex flex-center q-pb-lg">
                              <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                                <q-btn 
                                  class="q-mr-md bg-accent text-primary" 
                                  size="12px" 
                                  :style="'min-height:auto; padding:1px;'" 
                                  dense icon="color_lens"
                                  @click="logOut">
                                      Logout
                                    </q-btn>
                              </div>
                              </div>
                            </q-item-section>
                            </q-item>
                      </q-list>
            </q-menu>
        </q-btn>
        
    </q-bar>
</template>

<script>
import PDFWriter from "./pdf-writer.vue";
export default {
    components:{
      PDFWriter,
    },
    computed:{
        userSchool(){
            return this.$store.getters['schoolStore/userSchool'];
        },
        isAdmin(){
          return this.$router.history.current.fullPath !=='/admin';
        },
        IdentityModel() {
            return this.$store.getters['authenticationStore/IdentityModel'];
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
        }
    },
    methods:{
        logOut(){
            this.$emit("logoutUser");
        },
        scrollToElement(routename){
            this.$router.push(routename);

        },
        create(){
            const routename = this.$store.getters["authenticationStore/createURL"];
            this.$router.push(routename);
        },
        getIsUserPhoto(){
            var context = this;
            if(context.IdentityModel.base64String != "" &&
            context.IdentityModel.base64String != undefined){
                return true
            }else{
                return false
            }
        },
        onSearch(){
            console.log("onSearch")
            this.$store.commit("authenticationStore/setGlobalSearchDialog", true)
        }
    }
}
</script>