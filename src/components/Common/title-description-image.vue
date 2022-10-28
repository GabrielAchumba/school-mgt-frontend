<template>
    <div class="row q-pa-sm">
        <q-card class="col-12">
            <q-bar class="bg-accent text-primary">
                <div class="text-h6 text-primary text-center">{{ title }}</div>
            </q-bar>
             <q-separator />

                <q-card-section class="bg-primary text-accent">
                   <q-form class="q-pa-sm">
                    <div class="q-pa-sm">
                      <div class="row">
                        <p class="col-12 q-pa-sm">{{ description }}</p>
                      </div>
                    </div>
                    <div class="q-pa-sm">
                      <div class="row">
                        <div class="col-12 q-pa-sm">
                          <q-img 
                            :src="imageUrl"
                            spinner-color="accent"
                            class="rounded-borders"/>
                        </div>
                      </div>
                    </div>
                   </q-form>
                </q-card-section>
        </q-card>
    </div>
</template>

<script>
export default {
  props:{
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    }
  },
}
</script>