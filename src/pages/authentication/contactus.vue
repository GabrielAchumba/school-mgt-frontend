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

import { contact } from "../test-data/contact"
export default {
    components:{
        TorpaLanding,
        TitleDescription,
        Cards,
    },
    data(){
        return {
            contact: contact,
        }
    },
}
</script>
