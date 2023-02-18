<template>
    <div>
        <Logo/>
        <Install
        @login="login($event)"/>
        <Gallery/>
        <AboutProduct/>
        <PrivacyPolicy/>
    </div>
</template>

<script>

import Logo from "./Logo.vue"
import Gallery from "./Gallery.vue";
import Install from "./Install.vue";
import AboutProduct from "./AboutProduct.vue"
import PrivacyPolicy from "./PrivacyPolicy.vue";
export default {
    components:{
        Logo,
        Gallery,
        Install,
        AboutProduct,
        PrivacyPolicy
    },
    methods:{
        login(){
            this.$router.push(`/login_register`);
        }
    }
}
</script>
