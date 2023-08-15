<template>
    <div class="q-pa-none text-left jss31" style="min-width: 300px; max-width: 1000px;">
      
      <q-card>
        <div><slot name="titleBar"></slot></div>
      <q-list bordered padding class="rounded-borders" separator>
        <q-item-label header>{{ title }}</q-item-label>
  
        <q-item 
        v-for="item in list"
        :key="item.title"
        clickable v-ripple
        @click="onListItemClicked(item)">
          <q-item-section avatar top>
            <q-avatar>
                <img :src="item.src">
            </q-avatar>
          </q-item-section>
  
          <q-item-section>
            <q-item-label>{{ item.title }}</q-item-label>
            <q-item-label caption>{{ item.description }}</q-item-label>
          </q-item-section>
  
        </q-item>
      </q-list>
    </q-card>
    </div>
  </template>

<script>
export default {
    props:{
        list: {
            type: Array,
            default: () => []
        },
        title: {
            type: String,
            default: ""
        },
    },
    methods:{
      onListItemClicked(payload){
        this.$emit("onListItemClicked", payload)
      }
    }
}
</script>

<style scoped>
 .jss31 {
   font-family: "Segoe UI", system-ui, -webkit-pictograph;
 }
 </style>