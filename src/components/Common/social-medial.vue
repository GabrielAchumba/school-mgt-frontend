<template>
    <div class="q-pa-none bg-accent text-primary">
        <q-bar class="bg-accent text-primary">
            <IconLabel
            class="q-pa-sm"
            :icon="phoneIcon"
            :caption="phoneNumber"/>

            <IconLabel
            class="q-pa-sm"
            :icon="emailIcon"
            :caption="email"/>
         <q-space />

          <p class="q-pa-sm q-ma-sm text-caption">{{ selectedSchool.schoolName }}</p>

          <q-space />
        
        <q-icon
          class="q-pa-md"
          :name="facebookIcon"
          size="sm">
        </q-icon>
        <q-icon
          class="q-pa-md"
          :name="twitterIcon"
          size="sm">
        </q-icon>
        <q-icon
          class="q-pa-md"
          :name="linkedInIcon"
          size="sm">
        </q-icon>
        
      </q-bar>
    </div>
</template>

<script>
import IconLabel from "./icon-label.vue";
export default {
    computed:{
        isSchoolRoute(){
            return this.$store.getters["authenticationStore/isSchoolRoute"];
        },
        selectedSchool(){
            console.log("selectedSchool: ", this.$store.getters["schoolStore/selectedSchool"])
            return this.$store.getters["schoolStore/selectedSchool"];
        },
        email(){
            return this.$store.getters["ContactStore/officialEmail"];
        },
        phoneNumber(){
            return this.$store.getters["ContactStore/officialPhoneNumber1"];
        }
    },
    components:{
        IconLabel
    },
    props:{
        phoneIcon:{
            type: String,
            default: "phone"
        },
        emailIcon:{
            type: String,
            default: "email"
        },
        facebookIcon:{
            type: String,
            default: "facebook"
        },
        twitterIcon:{
            type: String,
            default: "twitter"
        },
        linkedInIcon:{
            type: String,
            default: "linkedin"
        }
    },
    methods:{
        create(){
            const routename = this.$store.getters["authenticationStore/createURL"];
            this.$router.push(routename);
        },
    }

}
</script>