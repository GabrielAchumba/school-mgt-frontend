<template>
       <div class="flex flex-center row">
       <q-card class="col-12 q-pa-sm">

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
      <q-form class="q-pa-sm">


        <div
          class="q-pa-sm"
          v-for="qSelect in formData.qSelects" 
          :key="qSelect.label">
          <span v-if="qSelect.visible">
            <p class="q-ma-none">{{ qSelect.label }}</p>
          <q-select
            class="q-ma-none"
            color="accent" 
            outlined label-color="accent"
             option-disable="inactive"
            v-model="qSelect.value"
            :options="qSelect.list"
            option-value="id"
            :option-label="'type'"
            name="type"
            emit-value
            map-options
            @input="onQSelectItemValueChanged(qSelect)"
            >
          </q-select></span>
        </div>

        <div
          class="q-pa-sm"
          v-for="GroupedCheckBox in formData.GroupedCheckBoxes" 
          :key="GroupedCheckBox.label">
          <q-expansion-item
            v-if="GroupedCheckBox.isGroupedCheckBox"
              class="col-12 q-pa-sm bg-primary text-accent"
              v-model="GroupedCheckBox.isExpanded"
              :label="GroupedCheckBox.label"
              dense
              dense-toggle
              expand-separator>
              <q-scroll-area
                :visible="visible"
                style="height: 100px;"
              >
                <q-option-group
                  :options="GroupedCheckBox.list"
                  type="checkbox"
                  v-model="GroupedCheckBox.group"
                />
              </q-scroll-area>
          </q-expansion-item>
        </div>


        <div
          class="q-pa-sm"
          v-for="table in formData.tables" 
          :key="table.id">
          <EditableTable
          :tableVM="table"
          @handleAddEditableTable="handleAddEditableTable($event)"
          @handleSubmitEditableTable="handleSubmitEditableTable($event)"
          @handleEditEditableTable="handleEditEditableTable($event)"
          @handleDeleteEditableTable="handleDeleteEditableTable($event)"/>
        </div>

        <div class="q-pa-sm"
          v-for="qInput in formData.qInputs" 
          :key="qInput.label">
          <span><p class="q-ma-none">{{ qInput.label }}</p>
          <q-input class="q-ma-none"
          outlined 
          v-model="qInput.name" 
          :type="qInput.type" >
              <template 
                v-if="qInput.Template.visible" 
                v-slot:append>
                <q-icon :name="qInput.Template.iconName" 
                class="bg-primary text-accent"
                @click="qInputTemplateAction(qInput.Template)" />
              </template>
          </q-input></span>
        </div>

        <div
          class="q-pa-md"
          v-for="qDate in formData.qDates" 
          :key="qDate.label">
          <span><p class="q-ma-none">{{ qDate.label }}</p>
          <q-input 
          class="q-ma-none"
          filled 
          v-model="qDate.name" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="qDate.name">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="accent" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input></span>
        </div>
       
        <div class="row q-pa-sm">
          <q-space />
          <q-btn class="q-ma-sm bg-accent text-primary"
            v-for="qBtn in formData.qBtns" 
            :key="qBtn.label"
            :label="qBtn.label"
            type="button"
            size="md"
            no-caps
            @click="ClickAction(qBtn.name)"
          />
      </div>
      </q-form>
  </q-card-section>

       </q-card>
      </div>


  


</template>

<script>
    import form from "./FormVM.js";
    import EditableTable from "../Tables/EditableTable.vue"
    export default {
        components:{
          EditableTable
        },
        props: {
            formData: {
              type: Object,
              default: form,
            },
            visible: {
              type: Boolean,
              default: true,
            }
        },
        methods: {
          onQSelectItemValueChanged(qSelect){
            this.$emit(qSelect.actionName, qSelect);
          },
          ClickAction(actionName){
              this.$emit(actionName);
          },
          qInputTemplateAction(payload){
            this.$emit("qInputTemplateAction", payload);
          },
          handleAddEditableTable(payload) {
            this.$emit(payload.handleAddName, payload);
          },
          handleSubmitEditableTable(payload) {
            this.$emit(payload.tableVM.handleSubmitName, payload);
          },
          handleEditEditableTable(payload) {
            this.$emit(payload.tableVM.handleEditName, payload);
          },
          handleDeleteEditableTable(payload) {
            this.$emit(payload.tableVM.handleDeleteName, payload);
          },
        },
    }
</script>