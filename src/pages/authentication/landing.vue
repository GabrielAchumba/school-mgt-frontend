<template>
  <div>
   <Carousel/>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
       <q-btn fab :icon="iconName" color="primary" class="bg-accent">
        <q-menu fit>
          <ChatBox/>
        </q-menu>
      </q-btn>
    </q-page-sticky>
  </div>
</template>

<script>
import Carousel from "../../components/Carousel/carousel.vue";
import ChatBox from "../../components/Menus/chatbox.vue";

export default {
  components:{
    Carousel,
    ChatBox,
  },
  data(){
    return {
      iconName: "keyboard_arrow_up",
    }
  },
  methods:{
    onChatBox(){
      var context = this;
      if(context.iconName == "keyboard_arrow_up") context.iconName = "close";
      else context.iconName = "keyboard_arrow_up";
      console.log("context.iconName: ", context.iconName)
    }
  }
}
</script>

<style>
   
</style>