<template>
  <div class="bg-primary">

        <div class="row text-center bg-primary flex flex-center">
          <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-md flex flex-center">
            
            <div 
            v-for="(card) in cardList" :key="card.title"
            class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
              <q-card @mouseover="hoverOver(1)" @mouseout="hoverOutTimeout(1)" 
              @click="cardClickHandler(card)"
              style="border: none;" class="my-card text-center box-shadow" square bordered>
                <q-img
                  :src="card.image"
                />
                <q-card-section class="bg-primary">
                  <div class="about_heading_1 text-h6 text-accent q-mt-sm q-mb-xs">{{ card.title }}</div>
                  <div class="text-h7 text-accent">
                    {{ card.description }}
                  </div>
                </q-card-section>
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
