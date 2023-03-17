<template>
    <div class="q-pa-none">
        <q-toolbar class="bg-primary text-accent">
            <q-icon
                class="q-pa-sm text-accent"
                :name="location"
                size="sm">
            </q-icon>
            Address: {{ officeAddress }}
            <q-space />
            <q-icon
                class="q-pa-sm text-accent"
                :name="email"
                size="sm">
            </q-icon>
            Email Address: {{ emailAddress }}
        </q-toolbar>
    </div>
</template>

<script>

export default {
    props:{
        location:{
            type: String,
            default: ''
        },
        officeAddress:{
            type: String,
            default: ''
        },
        email:{
            type: String,
            default: ''
        },
        emailAddress:{
            type: String,
            default: ''
        }
    }
}
</script>
