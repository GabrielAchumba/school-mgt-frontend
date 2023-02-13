<template>
    <div class="q-pa-sm">
        <TitleDescription
            :title="title"
            :description="description"/>
    </div>
</template>

<script>
import TitleDescription from "../Common/title-description2.vue";
export default {
    components:{
        TitleDescription,
    },
    props:{
        title: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default:  `<h5 style="text-align: left;"><span style="font-family: Roboto, -apple-system, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><b>About this app</b></span></h5><p style="text-align: left;">We are Beyond Banking
- OPay is licensed by CBN, insured by the NDIC and trusted by over 18 million users
- Easy and instant account opening with your phone number, NIN, BVN or other national means of verification, and enjoy an amazing welcome bonuses
- Manage all payments from one app and enjoy free transfers and transaction bonuses
- Free debit cards with bonuses</p>`,
        }
    }
}
</script>
