<template>
<q-layout>
   <q-page-container>
     <q-page class="flex flex-center bg-primary">
       <q-card
          class="personal-data-form"
          v-bind:style="
          $q.platform.is.mobile ? { width: '90%', height: '95%' } : { width: '90%' , height: '95%' }
          "
        >

   <q-card-section>
    <div class="row q-pa-sm bg-accent text-primary text-center flex flex-center">
      <div class="col-3">
      </div>
        <div class="col-6">
          <p>{{ formData.title }}</p>
        </div>
        
        <div class="col-3">
      </div>
    </div>
  </q-card-section>

   <q-card-section>
      <q-form class="q-gutter-md">
        <q-select class="q-pa-md"
          v-for="qSelect in formData.qSelects" 
          :key="qSelect.label"
          color="accent" 
          outlined label-color="accent"
          v-model="qSelect.name"
          :options ="qSelect.list"
          @input="onItemValueChanged"
          :label="qSelect.label"
          >
       </q-select>

        <q-input class="q-pa-md"
        v-for="qInput in formData.qInputs" 
        :key="qInput.label"
        outlined 
        v-model="qInput.name" 
        :label="qInput.label"
        :type="qInput.type" 
        lazy-rules />

       
        <div class="row">
          <q-space />
          <q-btn class="q-ma-md bg-accent text-primary"
            v-for="qBtn in formData.qBtns" 
            :key="qBtn.label"
            :label="qBtn.label"
            type="button"
            size="sm"
            no-caps
            @click="ClickAction(qBtn.name)"
          />
      </div>
      </q-form>
  </q-card-section>

       </q-card>
     </q-page>
   </q-page-container>
</q-layout>


  


</template>

<script>
    import form from "./FormVM.js";
    export default {
        props: {
            formData: {
              type: Object,
              default: form,
            },
        },
        methods: {
          ClickAction(actionName){
              this.$emit(actionName);
          }
        },
    }
</script>