<template>
    <div>
        <div class="row q-pa-none">
             <q-card class="col-12">
                <q-bar class="bg-accent text-primary">
                    <div class="text-h6 text-primary text-center">{{ formData.title }}</div>
                </q-bar>

                <q-separator />

                <q-card-section class="bg-primary text-accent">
                   <q-form class="q-pa-sm">

                     <div
                     class="q-pa-sm"
                      v-for="qToggle in formData.qToggles" 
                      :key="qToggle.label">
                       <q-toggle
                        v-if="qToggle.visible"
                        :label="qToggle.label"
                        v-model="qToggle.name"
                      />
                     </div>

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
                            style="height: 350px;"
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
                      v-for="qParagraph in formData.qParagraphs" 
                      :key="qParagraph.label">
                      <div class="row">
                        <p class="col q-pa-md">{{ qParagraph.label }}:</p>
                        <p class="col q-pa-md">{{ qParagraph.name }}</p>
                      </div>
                    </div>

                    <div class="q-pa-sm"
                      v-for="qLink in formData.qLinks" 
                      :key="qLink.label">
                      <div class="row">
                        <a class="col-12 q-pa-sm" :href="qLink.href" :target="qLink.target">
                          {{ qLink.label }}
                          </a>
                      </div>
                    </div>

                    <div class="q-pa-sm"
                      v-for="qImage in formData.qImages" 
                      :key="qImage.label">
                      <div class="row">
                       <div class="col-12 q-pa-sm">
                        <q-img 
                            :src="qImage.imageUrl"
                            spinner-color="accent"
                            class="rounded-borders"/>
                      </div>
                      </div>
                    </div>

                    <div class="q-pa-sm"
                      v-for="qInput in formData.qInputs" 
                      :key="qInput.label">
                      <span><p class="q-ma-none">{{ qInput.label }}</p>
                      <q-input class="q-ma-none"
                      @change="onFileSelected"
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
                  </q-form>
                </q-card-section>

                 <q-separator />

                 <q-card-actions align="right">
                   <div 
                   v-if="setIsResponsive"
                   class="row q-pa-sm">
                      <q-space />
                      <q-icon
                        class="q-pa-md text-accent"
                        v-for="qBtn in formData.qBtns" 
                        :key="qBtn.label" 
                        :name="qBtn.icon"
                        @click="ClickAction(qBtn.name)"
                        size="30px">
                          <q-tooltip>
                            {{ qBtn.label }}
                          </q-tooltip>
                        </q-icon>
                  </div>
                   <div 
                   v-else
                   class="row q-pa-sm">
                      <q-space />
                      <q-btn class="q-ma-sm bg-accent text-primary"
                        v-for="qBtn in formData.qBtns" 
                        :key="qBtn.label"
                        :label="qBtn.label"
                        type="button"
                        size="md"
                        :icon="qBtn.icon"
                        no-caps
                        @click="ClickAction(qBtn.name)"
                      />
                  </div>
                </q-card-actions>

             </q-card>
        </div>
    </div>
</template>

<script>
    import form from "./FormVM.js";
    import EditableTable from "../Tables/EditableTable.vue"
    export default {
        computed:{
          setIsResponsive(){
            const width = window.innerWidth;
            if(width < 700) return true;
            else return false;
          }
        },
        components:{
          EditableTable
        },
        props: {
            isResponsive:{
              type: Boolean,
              default: false
            },
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
          onFileSelected(event){
                var files = event.target.files;
                var selectedFile = files[0];
                this.$emit("onFileSelected", {
                  selectedFile,
                })
          },
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

<style>
a:link, a:visited {
  background-color: white;
  color: black;
  border: 2px solid green;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover, a:active {
  background-color: green;
  color: white;
}
</style>