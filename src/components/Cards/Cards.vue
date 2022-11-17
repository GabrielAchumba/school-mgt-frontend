<template>
  <div>
        <div class="row bg-primary wrap">
          <div class="col-12 q-mt-auto q-mb-auto flex flex-center"> 
            <div 
            class="q-pa-sm"
            v-for="(card) in cardList" :key="card.title">
              <q-card @mouseover="hoverOver(1)" @mouseout="hoverOutTimeout(1)" 
              @click="cardClickHandler(card)"
              style="border: none; width: 400px;" 
              class="my-card text-center box-shadow" square bordered>
                <q-img
                  :src="card.fileUrl"
                  height="500px"
                >
                  <div class="absolute-bottom">
                    <div class="text-h6">{{ card.title }}</div>
                    <div class="text-subtitle2">{{ card.description }}</div>
                  </div>
                </q-img>
              </q-card>
            </div>

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
            }
        },
        methods:{
              hoverOver: function(index) {
              this['about_heading_color_' + index] = this.theme_color;
              this['about_heading_' + index] = ['animated', 'bounceIn'];              
            },
            hoverOutTimeout: function(index) {
              this['about_heading_color_' + index] = '#424242';
              setTimeout(() => {
                this['about_heading_' + index] = [];                
              }, 1000);              
            },
            cardClickHandler(card) {
                 this.$emit(card.name, card); 
            }
        }
    }
</script>

<style>
</style>
