<template>
    <div>
        <q-scroll-area style="height: 80vh; max-width: 100%;">
        <div class="row q-pa-none flex flex-center">
             <q-card class="col-12 bg-primary">
                <q-bar class="bg-accent text-primary">
                    <div class="text-h6 text-primary text-center">{{ formData.title }}</div>
                </q-bar>

                <q-separator />

                <q-card-section>
                   <q-form class="q-pa-none">

                    <div class="q-pa-sm"
                      v-for="qColor in formData.qColors" 
                      :key="qColor.label">
                      <span><p class="q-ma-none">{{ qColor.label }}</p>
                      <q-input class="q-ma-none"
                      @change="onColorSelected"
                      outlined 
                      v-model="qColor.name" 
                      :type="qColor.type" >
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

                    <div  
                     v-for="qList in formData.qLists" 
                    :key="qList.label"
                    class="q-pa-sm">
                     <span>
                        <q-input class="q-ma-none bg-primary text-accent"
                        outlined 
                        bordered
                        v-model="qList.listBoxSearchModel" 
                        type="text" >
                        <template v-slot:prepend>
                          <q-icon name="add" 
                          @click="qListAddItemAction(qList)"/>
                        </template>
                            <template  
                              v-slot:append>
                              <q-icon name="search" 
                              class="bg-primary text-accent"
                              @click="qListTemplateAction(qList)"/>
                            </template>
                        </q-input>

                        <q-list
                        bordered>
                          <q-item  
                          v-for="item in qList.items" 
                          :key="item.label"
                          class="q-pa-sm" 
                          clickable 
                          v-ripple>
                            <q-item-section avatar>
                              <q-avatar color="accent" text-color="primary" size="md" square>
                                {{ item.letter }}
                                <!-- <p class="text-caption text-center">{{ item.letter }}</p> -->
                                <!-- <img :src="`https://cdn.quasar.dev/img/${contact.avatar}`"> -->
                              </q-avatar>
                            </q-item-section>

                            <q-item-section>
                              <q-item-label v-html="item.name"></q-item-label>
                              <q-item-label caption v-html="item.address"></q-item-label>
                            </q-item-section>

                            <q-item-section side top>
                              <q-icon 
                              name="more_vert" 
                              color="accent">
                              <q-menu fit>
                                <q-list dense class="text-accent text-caption bg-primary">
                                    <q-item
                                    v-for="qBtn in qList.qBtns" 
                                    :key="qBtn.label"
                                    class="bg-primary text-accent"
                                    clickable
                                    @click="ListItemHandler(qBtn.name, item)">
                                        <q-item-section>
                                            {{ qBtn.label }}
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                                </q-menu>
                              </q-icon>
                            </q-item-section>
                          </q-item>
                        </q-list>
                      </span>

                    </div>
                  </q-form>
                </q-card-section>

                 <q-separator />

                 <q-card-actions align="right">
                   <!-- <div 
                   v-if="setIsResponsive"
                   class="row q-pa-sm">
                      <q-space />
                      <q-icon
                        class="q-pa-md text-accent"
                        v-for="qBtn in formData.qBtns" 
                        :key="qBtn.label" 
                        :name="qBtn.icon"
                        @click="ClickAction(qBtn.name, formData)"
                        size="30px">
                          <q-tooltip>
                            {{ qBtn.label }}
                          </q-tooltip>
                        </q-icon>
                  </div> --> 
                   <div 
                   v-if="setIsResponsive"
                   class="row q-pa-sm">
                      <q-space />
                      <div class="text-right">
                        <q-btn class="q-ma-sm bg-accent text-primary"
                        v-for="qBtn in formData.qBtns" 
                        :key="qBtn.label"
                        :label="qBtn.label"
                        :disabled="qBtn.btnDisabled"
                        type="button"
                        size="sm"
                        no-caps
                        @click="ClickAction(qBtn.name, formData)"
                      />
                      </div>
                  </div>
                   <div 
                   v-else
                   class="row q-pa-sm">
                      <q-space />
                      <div class="text-right">
                        <q-btn class="q-ma-sm bg-accent text-primary"
                        v-for="qBtn in formData.qBtns" 
                        :key="qBtn.label"
                        :label="qBtn.label"
                        :disabled="qBtn.btnDisabled"
                        type="button"
                        size="md"
                        no-caps
                        @click="ClickAction(qBtn.name, formData)"
                      />
                      </div>
                  </div>
                </q-card-actions>

             </q-card>
        </div>
        </q-scroll-area>
    </div>
</template>

<script>
    /* import { fromPath } from "pdf2pic";

    const options = {
      density: 100,
      saveFilename: "untitled",
      savePath: "./images",
      format: "png",
      width: 600,
      height: 600
    }; */

    import form from "./FormVM.js";
    import EditableTable from "../Tables/EditableTable.vue";
    import ContextMenu from "../Menus/context-menu.vue";
    import ContextMenuItem from "../Menus/context-menu-item.vue";
import { getLineWidth } from 'plotly.js-dist';
    export default {
        computed:{
          setIsResponsive(){
            const width = window.innerWidth;
            if(width < 700) return true;
            else return false;
          },
          listBoxStyle(){
              const width = window.innerWidth - 20;
              return {
              //height: `100vh`,
              width: `${width}px`,
              }
          },
        },
        components:{
          EditableTable,
          ContextMenu,
          ContextMenuItem
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
        data(){
          return {
            show: true,
            listBoxSearchTemplate:{ sn: 0, iconName: "search", visible: true},
          }
        },
        methods: {
          linkClick(row){
            this.$emit("linkClick", row)
          },
          onEmbededContextMenu(e){
            alert("cannot save");
            return false; 
           
          },
          pdfUrl(fileUrl){
          
            // return //`${fileUrl}#zoom=85&toolbar=0&navpanes=0`
            /* const pageToConvertAsImage = 1;
            const isBase64 = true;
            const res = fromPath(filePath, options).convert(pageToConvertAsImage, isBase64);
            console.log("res: ", res) */
            

            //`${fileUrl}#zoom=85&toolbar=0&navpanes=0`

            return `${fileUrl}#zoom=85&toolbar=0&navpanes=0`
          },
          onToggle(event){
            this.$emit("onToggle", event);
          },
          onFileSelected(event){
            //let video = document.getElementById('video-preview');
            console.log("event: ", event)
            var files = event.target.files;
            var selectedFile = files[0];
            console.log("selectedFile: ", selectedFile)

              this.$emit("onFileSelected", {
                selectedFile,
              })

              this.$emit("onFileSelected2", {
                selectedFile,
              })

                
          },
          onColorSelected(){

          },
          onQSelectItemValueChanged(qSelect){
            this.$emit(qSelect.actionName, qSelect);
          },
          ClickAction(actionName, formData){
              var context = this;
              if(context.btnDisabled === true)context.btnDisabled = false;
              else context.btnDisabled = true;
              this.$emit(actionName, formData);
          },
          qInputTemplateAction(payload){
            this.$emit("qInputTemplateAction", payload);
          },
          qListTemplateAction(payload){
            this.$emit("qListTemplateAction", payload);
          },
          qListAddItemAction(payload){
            this.$emit("qListAddItemAction", payload);
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
          ListItemHandler(actionName, qListItem){
            console.log("actionName: ", actionName)
            console.log("qListItem: ", qListItem)
            this.$emit(actionName, qListItem);
          },
          disableRightclick(evt){
            var context = this;
            console.log("evt")
            if(evt.button == 2){
                return false;    
            }
          },
        },
        created(){
          var context = this;
         //window.addEventListener("mousedown", this.disableRightclick);
        }
    }
</script>

<style>
        .embed-cover {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
        
          opacity: 0.25;
        }

        .wrapper {
          position: relative;
          /* overflow: hidden;
          overscroll-behavior: contain; */
        }

  .pdf-container {
    display: none;
  }
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

img {
    max-width: 100%;
    max-height: 100%;
}

video{
		max-width: 100%;
    max-height: 100%;
}
</style>