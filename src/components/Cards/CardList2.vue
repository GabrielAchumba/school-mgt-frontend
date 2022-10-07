<template>
  <div class="bg-primary">

        <div class="row text-center bg-primary flex flex-center">
          <div class="col-12 q-pa-sm flex flex-center">
            
            <div 
            v-for="(card) in cardList" :key="card.id"
            class="col-12">
              <q-card @mouseover="hoverOver(1)" @mouseout="hoverOutTimeout(1)" 
              @click="cardClickHandler(card)"
              style="border: none;" class=" row text-center box-shadow q-ma-sm q-pa-sm" square bordered>
                <q-btn
                   class="bg-accent text-primary"
                  round>
                  <q-avatar size="42px">
                    {{ card.title.charAt(0) }}
                </q-avatar>
                </q-btn>
                <p class="q-pa-sm">{{ card.title }} </p>
                <q-card-section class="row bg-primary">
                  <div class="text-h7 text-accent">
                    {{ card.description }}
                  </div>
                </q-card-section>
                <q-card-section class="row bg-primary">
                        <q-btn
                        class="bg-accent text-primary"
                        round
                        @click="viewItem(card)">
                            <q-icon
                            name="arrow_forward">
                            </q-icon>
                        </q-btn>
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
          },
          viewItem(selectedItem){
            this.$emit("updateItem", selectedItem);
          },
        }
    }
</script>

<style>
</style>
