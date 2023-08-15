<template>
    <div>
      <div class="row q-pa-none">
        <q-card style="min-width: 350px">
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">
              <q-avatar
                color="transparent"
                text-color="positive"
                icon="tag"
              />
              {{ title }}
            </div>
            <q-space />
            <q-btn
              flat round dense
              icon="close"
              @click="closeDialogBox"
            />
          </q-card-section>
          <!-- <q-separator /> -->
          <q-card-section>
            <div class="q-pa-sm text-center">
            <q-space/>
            <q-btn  no-caps flat  class="text-center bg-ight-page">
                <span><q-avatar round size="100px">
                    <img :src="img_png(logo)"
                    style="height: 100%; width: 100%">
                </q-avatar></span>
            </q-btn>
            <q-space/>
            </div>
          </q-card-section>

          <q-card-section >
            <div class="row">
                <!-- <span> -->
                    <div 
                    v-for="serviceVariable in serviceVariables"
                    class="col-12 q-pa-md">
                        <div class="row">
                            <div class="col text-left q-pa-none">{{ serviceVariable.title }}</div>
                            <q-space/>
                            <div class="col text-right q-pa-none">{{ serviceVariable.value }}</div>
                        </div>
                    </div>
                <!-- </span> -->
            </div>
          </q-card-section>

        <s-text-input
                :formData="phoneNumberForm"
                class="q-pa-sm"
              />

          <q-card-section>
            
          </q-card-section>
          <!-- <q-separator /> -->
          <q-card-actions>
            <q-btn
                :style="myStyle"
                class="bg-positive text-accent"
                type="button"
                no-caps
                dense
                :label="closeButtonLabel"
                @click="submitAction"
                ></q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </template>
  
  <script>
  import mixin_Input from "src/mixins/Mixin-Input";
  
  export default {
    name: "messageDialog",
    computed:{   
        myStyle() {
        let data = {
            height: this.height + "px",
            width: this.width + "px",
        };
        if (this.enableFullWidth) {
            data = {
            height: this.height + "px",
            width: "100%"
            };
        }
        return data;
        },
    },
    mixins: [mixin_Input],
    props: {
      title: {
        type: String,
        require: true,
      },
      closeButtonLabel: {
        type: String,
        default: "Okay",
      },
      serviceVariables: {
        type: Array,
        default: () => []
      },
        width: {
        default: "100",
        type: String,
        },
        height: {
        default: "35",
        type: String,
        },
        enableFullWidth: {
        default: true,
        type: Boolean,
        },
        pinForm: {
            type: Object,
            default: () => {}
        }
    },
    data(){
        return {
            logo: "Neway_Logo",
            code: "",
        }
    },
    methods:{
        img_png(fileUrl){
            try{
                var images = require.context('../../statics/images/', false, /\.png$/)
                return images('./' + fileUrl + ".png")
            }catch(e){
                console.log(e)
                return ""
            }
        }, 
      closeDialogBox(){
        var context = this;
        this.$emit("close", context.title); 
      },
      submitAction(){
        var context = this;
        console.log("submitAction")
        this.$emit("submitAction", context.title); 
      }
    }
  }
  </script>

<style>
</style>

  