<template>
    <div class="q-pa-none bg-accent text-primary">
        <q-toolbar class="bg-accent text-primary">
            <q-btn flat dense round @click="create" avatar>
            <q-avatar 
                class="bg-primary text-accent"
                size="md">
                <img :src="logoImageUrl">
                </q-avatar>
            </q-btn>
         <q-space />

         <q-tabs v-model="selected_tab" shrink>

        <div v-if="rightDrawerOpen">
          <q-btn
            :icon="rightMenuIcon"
            flat
            dense
            class="text-primary bg-accent">
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
        class="q-mr-sm q-py-xs text-primary" 
        @click="scrollToElement(menuItem.name);" 
        :label="menuItem.label" />
       </q-tabs>
        
      </q-toolbar>
    </div>
</template>

<script>
import IconLabel from "./icon-label.vue";
export default {
    computed:{
        menuList() {
            return this.$store.getters['authenticationStore/menuList'];
        },
    },
    components:{
        IconLabel
    },
    props:{
        logoImageUrl:{
            type: String,
            default: ""
        },
    },
    data(){
        return {
            rightDrawerOpen: window.innerWidth < 700 ? true : false,
            selected_tab: 'home',
        }
    },
    methods:{
        scrollToElement(routename){
            var context = this;
            context.selected_tab =  routename;
            this.$router.push(`${routename}`);
        }
    }
}
</script>