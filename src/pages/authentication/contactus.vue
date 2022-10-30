<template>
    <div class="q-pa-sm">
        <TorpaLanding/>
        <TitleDescription
            :title="contact.title"
            :description="contact.description"/>
        <Cards 
        :cardList="contact.list"/>
    </div>
</template>

<script>
import Cards from "../../components/Cards/CardListWithIcons.vue"
import TorpaLanding from "./landing2.vue";
import TitleDescription from "../../components/Common/title-description2.vue";

export default {
    computed:{
        contact(){
            return this.$store.getters["ContactStore/selectedContact"];
        }
    },
    components:{
        TorpaLanding,
        TitleDescription,
        Cards,
    },
}
</script>
