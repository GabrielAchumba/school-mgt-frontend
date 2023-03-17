<template>
    <div class="q-pa-sm">
        <TitleDescription
            :title="title"
            :description="description"/>
    </div>
</template>

<script>
import TitleDescription from "../Common/title-description2.vue";
import { privacyPolicyVM } from "./viewmodels/PrivacyPolicy";
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
            default:  privacyPolicyVM.introduction + privacyPolicyVM.section1 +
            privacyPolicyVM.section2 + privacyPolicyVM.section3 +
            privacyPolicyVM.section4 + privacyPolicyVM.section5 +
            privacyPolicyVM.section6 + privacyPolicyVM.section7 +
            privacyPolicyVM.section8 + privacyPolicyVM.section9 +
            privacyPolicyVM.section10,
        }
    }
}
</script>
