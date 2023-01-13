<template>
    <div class="q-pa-none text-accent">
        <q-toolbar class="bg-accent text-accent">
            <img :src="selectedLogo.fileUrl"
                style="height:50px; width:50px;">
         <q-space />

         <q-tabs v-model="selected_tab" shrink>

        <div>
            <!-- <div v-if="rightDrawerOpen"> -->
          <q-btn
            :icon="rightMenuIcon"
            flat
            dense
            class="text-primary bg-accent">
            <q-menu fit>
              <q-list dense class="text-accent text-caption bg-primary" style="width:200px;">
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

        <!-- <q-tab 
        v-else
         v-for="(menuItem) in menuList" :key="menuItem.name"
        class="q-mr-sm q-py-xs text-accent" 
        @click="scrollToElement(menuItem.name);" 
        :label="menuItem.label" /> -->
       </q-tabs>
        
      </q-toolbar>
      <!-- <q-img
      src="statics/images/banner1.jpg"
      class="header-image absolute-top"/> -->
    </div>
</template>

<script>
import IconLabel from "./icon-label.vue";
export default {
    computed:{
        menuList() {
            return this.$store.getters['authenticationStore/menuList'];
        },
        selectedLogo(){
            return this.$store.getters['LogoStore/selectedLogo'];
        }
    },
    components:{
        IconLabel
    },
    /* props:{
        logoImageUrl:{
            type: String,
            default: "/statics/newway.jpg"
        },
    }, */
    data(){
        return {
            rightDrawerOpen: window.innerWidth < 700 ? true : false,
            selected_tab: 'home',
            rightMenuIcon: "menu",
        }
    },
    methods:{
        scrollToElement(routename){
            var context = this;
            context.selected_tab =  routename;
            this.$router.push(`${routename}`);
            var isSchoolRoute = this.$router.history.current.fullPath=='/school-landing';
            console.log("isSchoolRoute: ", isSchoolRoute);
            this.$store.commit("authenticationStore/setIsSchoolRoute", isSchoolRoute)
        }
    }
}
</script>

<style scoped>
img {
  border-radius: 50%;
}
.header-image {
    height:100%;
    z-index:-1;
    opacity: 0.8; 
}
</style>