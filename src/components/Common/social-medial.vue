<template>
    <div class="q-pa-none bg-accent text-primary">
        <q-toolbar class="bg-accent text-primary">
            <IconLabel
            :icon="phoneIcon"
            :caption="phoneNumber"/>

            <IconLabel
            :icon="emailIcon"
            :caption="email"/>
         <q-space />
        
        <q-icon
          class="q-pa-md text-accent"
          :name="facebookIcon"
          size="sm">
        </q-icon>
        <q-icon
          class="q-pa-md text-accent"
          :name="twitterIcon"
          size="sm">
        </q-icon>
        <q-icon
          class="q-pa-md text-accent"
          :name="linkedInIcon"
          size="sm">
        </q-icon>
        
      </q-toolbar>
    </div>
</template>

<script>
import IconLabel from "./icon-label.vue";
export default {
    components:{
        IconLabel
    },
    props:{
        phoneNumber:{
            type: String,
            default: ""
        },
        phoneIcon:{
            type: String,
            default: ""
        },
        email:{
            type: String,
            default: ""
        },
        emailIcon:{
            type: String,
            default: ""
        },
        facebookIcon:{
            type: String,
            default: ""
        },
        twitterIcon:{
            type: String,
            default: ""
        },
        linkedInIcon:{
            type: String,
            default: ""
        }
    }

}
</script>