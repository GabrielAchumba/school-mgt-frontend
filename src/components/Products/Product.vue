<template>
    <div>
        <Logo/>
        <Install/>
        <Gallery/>
        <AboutProduct/>
    </div>
</template>

<script>

import Logo from "./Logo.vue"
import Gallery from "./Gallery.vue";
import Install from "./Install.vue";
import AboutProduct from "./AboutProduct.vue"
export default {
    components:{
        Logo,
        Gallery,
        Install,
        AboutProduct
    }
}
</script>
