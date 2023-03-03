<template>
  <q-layout view="hHh lpR fFf" class="bg-primary">

     <q-header class="q-py-sm bg-primary text-accent"  :style="'border-bottom: 2px solid '+ theme_color">
        <q-toolbar>
        <img src='/statics/lhdi.png' width=100 height=40>
        <!-- <span :style="'font-size: 35px;'" class="my-font text-h6 q-mr-md text-secondary">LHDI</span> -->
        <q-space ></q-space>
      <q-tabs v-model="selected_tab" shrink>

        <div v-if="rightDrawerOpen">
          <q-btn
            @click="toggleMobilePhoneMenu"
            :icon="rightMenuIcon"
            flat
            dense
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
        class="q-mr-sm q-py-xs text-accent" 
        @click="scrollToElement(menuItem.name);" 
        :label="menuItem.label" />
       </q-tabs>
        
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  //name: 'AdminLayout',
  computed: {
        theme_color(){
          return this.$store.getters['authenticationStore/theme_color'];
        },
      },
  data () {
    return {
      rightMenuIcon: "menu",
      rightDrawerOpen: window.innerWidth < 700 ? true : false,
      leftDrawerOpen: true,
      showAccountDetails: false,
      showMobilePhoneMenu: false,
      selected_tab: 't_0',
      menuList: [
        { name: "id_home", tabIndex: "t_0", label: "Home" },
        { name: "id_login_Register", tabIndex: "t_1", label: "Login/Register"},
        { name: "id_about_us", tabIndex: "t2", label: "About Us" },
        { name: "id_categories", tabIndex: "t_3", label: "Categories" },
        { name: "id_skills-aquisition", tabIndex: "t_4", label: "Skills Acquisition" }
      ]
    }
  },
  methods:{
    onResize(e) {
      const width = window.innerWidth;
      var content = this;
      content.rightDrawerOpen = false
      if(width < 700) {
        content.rightDrawerOpen = true;
        this.$store.dispatch('authenticationStore/setRightDrawerOpen', content.rightDrawerOpen)
      }
    },
    toggleMobilePhoneMenu(){
      var context = this;

      /* if(context.showMobilePhoneMenu == false){
        //context.showMobilePhoneMenu = true;
        //context.rightMenuIcon = "close";
      }else{
        context.showMobilePhoneMenu = false;
        context.rightMenuIcon = "menu"
      } */
    },
    getTabHeaderStyle(tabIndex){
      var context =  this;
      if(context.selected_tab == tabIndex){
        return `[{backgroundColor: ${context.theme_color}}]`
      }
      return `[{}]`
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
      this.$router.push('/about');
    },
    displayContactUsPage(){
      this.$router.push('/contact');
    },
    scrollToElement(identityvalue){

    var context = this;

    if(identityvalue == 'id_home'){
        context.selected_tab =  't_0';
        this.$router.push('/home');
    }
      
      if(identityvalue == 'id_about_us'){
        context.selected_tab =  't_1';
        this.$router.push('/about');
      }

      if(identityvalue == 'id_categories'){
          context.selected_tab =  't_2';
        this.$router.push('/categories');
      }

      if(identityvalue == 'id_login_Register'){
          context.selected_tab =  't_3';
        this.$router.push('/login_register');
      }

      if(identityvalue == 'id_skills-aquisition'){
          context.selected_tab =  't_4';
        this.$router.push('/skills-aquisition');
      }

     /* context.showMobilePhoneMenu = false;
     context.rightMenuIcon = "menu" */

    }
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
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