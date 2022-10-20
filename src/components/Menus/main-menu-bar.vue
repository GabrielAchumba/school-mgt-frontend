<template>
    <q-bar class="q-pa-none row bg-accent" >
        <q-btn flat dense round icon="settings" aria-label="Settings" />
        <q-btn flat dense round icon="create" @click="create"/>

        <q-space />
        <q-btn dense flat round icon="search" />
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
        <q-btn dense flat icon="close" @click="logOut"/>
        
    </q-bar>
</template>

<script>
export default {
    props:{
        menuList: {
            type: Array,
            default: []
        }
    },
    data(){
        return {
            visibilityIcon: "visibility"
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
        }
    }
}
</script>