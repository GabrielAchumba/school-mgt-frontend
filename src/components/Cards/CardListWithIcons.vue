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
                <q-icon
                class="q-pa-md text-accent"
                :name="card.icon"
                size="md">
                </q-icon>
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
