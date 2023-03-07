<template>
  <q-layout view="hHh lpR fFf" class="bg-primary">

     <q-header class="q-py-sm bg-primary text-accent" :style="'border-bottom: 2px solid '+ theme_color">
        <q-toolbar>
          <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="bg-primary text-accent"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <img src='/statics/lhdi.png' width=100 height=40>
       <q-space ></q-space>
      <q-tabs v-model="selected_tab" shrink>

        <div v-if="rightDrawerOpen">
          <q-btn
            @click="toggleMobilePhoneMenu"
            :icon="rightMenuIcon"
            flat
            class="text-accent bg-primary">
            <q-menu fit>
              <q-list dense class="text-accent text-caption bg-primary">
                <q-item
                v-for="(menuItem) in menuList" :key="menuItem.name" 
               class="bg-primary text-accent"
                clickable
                  @click="scrollToElement(menuItem.name)">
                      <q-item-section>
                      {{ menuItem.label}}
                      </q-item-section>
                  </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>

        <q-tab
         v-else
         v-for="(menuItem) in menuList" :key="menuItem.name"
        :style= getTabHeaderStyle(menuItem.tabIndex)
        lass="q-mr-sm q-py-xs text-accent" 
        @click="scrollToElement(menuItem.name);" 
        :label="menuItem.label"  />

          <q-btn
          @click="toggleButton" 
          flat
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
                                  class="bg-primary text-accent">
                                    {{ IdentityModel.firstName }}
                                  </q-avatar>
                              </div>
                              <div 
                              class="q-pa-md" style="font-family: Lato;">
                                <p class="bg-primary text-accent">
                                    {{ IdentityModel.firstName }} {{ IdentityModel.lastName }}
                                  </p>
                              </div>
                              </div>
                            </div>
                            </q-item-section>
                        </q-item>

                            <q-item
                            class="bg-primary text-accent">
                            <q-item-section avatar>
                            <div class="row text-center flex flex-center q-pb-lg">
                              <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                                <q-btn 
                                  class="q-mr-md bg-accent text-primary" 
                                  size="12px" 
                                  :style="'min-height:auto; padding:1px;'" 
                                  dense icon="color_lens"
                                  @click="logoutUser">
                                      Logout
                                    </q-btn>
                              </div>
                              </div>
                            </q-item-section>
                            </q-item>
                      </q-list>
              </q-menu>
        </q-btn>

      </q-tabs>
        
      </q-toolbar>
    </q-header>

    <q-drawer 
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="200"
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
          <q-item
           clickable
            class="bg-primary text-accent">
          <q-item-section avatar>
            <q-item-label>Update Profile</q-item-label>
             <q-menu
                      fit>
                      <q-list dense class="text-accent text-caption bg-primary">
                        <q-item
                            v-for="nav in userProfileNavs"
                            :key="nav.label"
                            :to="nav.to"
                            clickable
                            class="bg-primary text-accent">
                            <q-item-section avatar>
                            <q-item-label>{{ nav.label }}</q-item-label>
                            </q-item-section>
                            </q-item>
                      </q-list>
            </q-menu>
                   
          </q-item-section>
        </q-item>
        
        <q-item
        v-for="nav in navs"
        :key="nav.label"
        :to="nav.to"
        class="bg-primary text-accent"
        exact
        clickable>
        <q-item-section avatar>
          <q-icon :name="nav.icon"/>
        </q-item-section>
        <q-item-section avatar>
          <q-item-label>{{ nav.label }}</q-item-label>
        </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import paymentresponse from 'pages/contribution/paymentresponse.vue';

export default {
  //name: 'AdminLayout',
  computed: {
        IdentityModel() {
            return this.$store.getters['authenticationStore/IdentityModel'];
        },
        Loginstatus() {
          return this.$store.getters['authenticationStore/Loginstatus'];
        },
        theme_color(){
          return this.$store.getters['authenticationStore/theme_color'];
        },
        IsPaymentSuccessful(){
          return this.$store.getters['accountStore/IsPaymentSuccessful'];
        }
      },
  components: {
    'paymentresponse-app': paymentresponse

  },
  data () {
    return {
      leftDrawerOpen: true,
      showAccountDetails: false,
      rightMenuIcon: "menu",
      selected_tab: 't_0',
      userProfileNavs: [
        {
          label:'Contact',
          icon: 'group',
          to:'/user-contact'
        },
        /* {
          label:'Bio-Data',
          icon: 'group',
          to:'/user-biodata'
        }, */
        {
          label:'Bank Details',
          icon: 'group',
          to:'/user-bankdetails'
        },
        {
          label:'Next of Kin',
          icon: 'group',
          to:'/user-nextofkin'
        },
      ],
       navs: [
              {
                label:'Category NGN500.00',
                icon: 'group',
                to:'/user-createCategoryN500'
              },
              {
                label:'Category NGN1000.00',
                icon: 'group',
                to:'/user-createCategoryN1000'
              },
              {
                label:'Category NGN2000.00',
                icon: 'group',
                to:'/user-createCategoryN2000'
              },
              {
                label:'Category NGN5000.00',
                icon: 'group',
                to:'/user-createCategoryN5000'
              },
              {
                label:'Category NGN10000.00',
                icon: 'group',
                to:'/user-createCategoryN10000'
              },
              {
                label:'Invest',
                icon: 'group',
                to:'/user-contribution'
              },
              {
                label:'Dashboard',
                icon: 'school',
                to:'/user-dashboard'
              },
              {
                label:'Advertise Business',
                icon: 'school',
                to:'/user-dashboard'
              },
              {
                label:'FAQs',
                icon: 'school',
                to:'/faqs'
              }
      ],
      rightDrawerOpen: window.innerWidth < 700 ? true : false,
      menuList: [
        { name: "id_home", tabIndex: "t_0", label: "Home" },
        { name: "id_about_us", tabIndex: "t2", label: "About Us" },
        { name: "id_categories", tabIndex: "t_3", label: "Categories" }
      ]
    }
  },
  methods:{
    getTabHeaderStyle(tabIndex){
      var context =  this;
      if(context.selected_tab == tabIndex){
        return `[{backgroundColor: ${context.theme_color}}]`
      }
      return `[{}]`
    },
    toggleMobilePhoneMenu(){
      var context = this;

      if(context.showMobilePhoneMenu == false){
        context.rightMenuIcon = "close";
      }else{
        context.rightMenuIcon = "menu"
      }
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
    toggleButton(){
      var context = this;

      if(context.showAccountDetails == true){
        context.showAccountDetails = false;
      }else{
        context.showAccountDetails = true;
      }
    },
    logoutUser(){
      this.$store.dispatch('authenticationStore/Logout')
    },
    displayHomePage(){
      this.$router.push('/');
    },
    displayAboutUsPage(){
      this.$router.push('/user-about');
    },
    displayContactUsPage(){
      this.$router.push('/user-contact');
    },
    scrollToElement(identityvalue){

      if(identityvalue == 'id_home'){
          this.$router.push('/user-home');
      }

      if(identityvalue == 'id_about_us'){
        this.$router.push('/user-about');
      }

      if(identityvalue == 'id_categories'){
        this.$router.push('/user-categories');
      }

     /*  if(identityvalue == 'id_team'){
        this.$router.push('/team');
      } */
    },
    onResize(e) {
      const width = window.innerWidth;
      var content = this;
      content.rightDrawerOpen = false
      if(width < 700) content.rightDrawerOpen = true;
    },
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.onResize);
  },
}
</script>

<style lang="sass">
    .main_line
      font-size: 75px;
      letter-spacing: 5px;
      line-height: 60px;
      font-weight: 600;

    .custom-caption
      text-align: center;
      padding: 12px;
      color: white;

    .animation_1
      -webkit-animation: bounceIn 1s ease-in 800ms both;
      animation: bounceIn 1s ease-in 800ms both;

    .animation_2
      -webkit-animation: flipInX 2s ease-in-out 800ms both;
      animation: flipInX 1s ease-in-out 800ms both;

    .animation_3
      -webkit-animation: lightSpeedIn 1s ease-in 800ms both;
      animation: lightSpeedIn 1s ease-in 800ms both;

    .description
      padding: 10px
      background-color: black
      color: white
      box-shadow: 1px 1px 2px #e6e6e6

    .my-header
      width: 200px
      top: 0
      height: 45px
      color: black
      background-color: rgba(255,255,255, 0.8)
      text-transform: uppercase
      text-align: center
      font-size: 17px
      margin: 20px 0 0 68px
      padding: 25px

    .my-text
      width: 100%
      top: 0
      height: 90px
      color: white
      text-align: center
      font-size: 15px
      margin: 79px 0 0 0
      padding: 20px
      line-height: normal
      font-family: Georgia, serif
      font-style: italic

    .my-button-container
      width: 100%

    .my-button
      text-decoration: none
      text-transform: uppercase
      margin: 0 0 20px 0
      text-align: center
      padding: 7px 14px
      background-color: #000
      color: #fff
      text-transform: uppercase
      box-shadow: 0 0 1px #000
      transition-delay: 0.2s

    .my-button:hover
      box-shadow: 0 0 5px #000

    .box-shadow:hover
      box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12) !important;

    .my-card
      width: 350px
      max-width: 350px
      margin-top: 10px

    .team-header
      width: 100%
      top: 0
      height: 45px
      color: white
      text-transform: uppercase
      text-align: center
      font-size: 17px
      margin: 60px 0 0 0
      padding: 12px

    .team-text
      width: 100%
      top: 0
      height: 90px
      color: white
      text-align: center
      font-size: 15px
      margin: 100px 0 0 0
      padding: 20px
      line-height: normal
      font-family: Georgia, serif
      font-style: italic
    
    .quote
      background: url(/statics/images/parallax.jpg);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-repeat: no-repeat;
    
    .pricing
      background: url(/statics/images/pricing.jpg);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-repeat: no-repeat;
    
    .contact_us
      background: url(/statics/images/contact_us.jpg);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-repeat: no-repeat;
    
    .custom_tab
      width: 130px;
</style>