<template>
    <div>
          <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm"
                  v-for="(card, i) in cardList" :key="card.label">
                  <q-card 
                  @click="cardClickHandler(card)"
                  class="my-card text-dark-page text-center no-shadow text-subtitle1"
                  :style="card.style">

                    <div class="q-pa-sm text-center">
                        <q-space/>
                        <q-btn  no-caps flat  class="text-center bg-ight-page">
                            <span><q-avatar round size="200px">
                                <img :src="img(card.image)"
                                style="height: 100%; width: 100%">
                            </q-avatar></span>
                        </q-btn>
                        <q-space/>
                    </div>

                    <q-card-section class="text-center q-pa-sm"
                    v-if="!rightDrawerOpen">
                      <div class="text-center q-pa-sm text-h6"><b>{{ card.label }}</b></div>
                      <p class="text-center q-pa-sm" style="white-space: pre-line">
                        {{ card.description }}
                      </p>
                  </q-card-section>
  
                  <q-card-section class="text-center q-pa-sm"
                  v-else>
                    <div class="text-center q-pa-sm text-h6"><b>{{ card.label }}</b></div>
                    <p class="text-center q-pa-sm">
                      {{ card.description }}
                    </p>
                  </q-card-section>
  
                  </q-card>
              </div>
  
          </div>
    </div>
  </template>
  
  <script>
  
      export default {
          props: {
              theme_color: {
                  type: String,
                  default: '#10731f',
              },
              cardList: {
                  type: Array,
                  default: [],
              },
              cardClickEvent: {
                  type: String,
                  default: "",
              },
              rightDrawerOpen: {
                  type: Boolean,
                  default: false
              }
          },
          methods:{
              cardClickHandler(card) {
                   this.$emit(card.name, card); 
              },
            img(fileUrl){
                try{
                    var images = require.context('../../statics/logos/', false, /\.jpg$/)
                    return images('./' + fileUrl + ".jpg")
                }catch(e){
                    return ""
                }
            }
          }
      }
  </script>
  
  <style scoped>
  .card {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: auto;
    height: auto;
  }
  
  .my-card{
        max-width: 400px;
        /* height: 400px; */
        min-height: 400px;
        border: 1px  rgba(255,255,255, 1) solid;
        /* max-width: 250px; */
    }
  </style>
  