<template>
  <div>
        <div class="row bg-primary">
            <div class="col-12 q-pa-sm"
                v-for="(card, i) in cardList" :key="card.title">
                <q-card 
                @mouseover="hoverOver(i)" @mouseout="hoverOutTimeout(i)" 
                @click="cardClickHandler(card)"
                class="my-card bg-primary text-accent text-center shadow-2">

                <!-- <div class="text-h6 bg-accent text-primary text-center q-pa-sm">{{ card.title }}</div> -->

                <q-bar class="q-pa-none row bg-accent text-primary">
                  <div class="text-primary text-left q-pa-sm">{{ card.title }}</div>
                </q-bar>

                <!-- class="q-pa-sm absolute-center" -->
                <img
                  class="my-img"
                  :src="card.image"
                  height="80%"
                  width="50%"
                />
                    
                    <!-- <br>
                   
                   <div class="text-h8 text-accent">
                    {{ card.description }}
                  </div> -->

                  <q-card-section class="bg-primary absolute-bottom">
                  <p class="text-accent">
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
            }
        },
        methods:{
              hoverOver: function(index) {
                console.log("index: ", index)
                this['about_heading_color_' + index] = this.theme_color;
                this['about_heading_' + index] = ['animated', 'bounceIn'];              
            },
            hoverOutTimeout: function(index) {
                console.log("index: ", index)
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
      width: 100%;
      height: 400px;
      border: 1px  rgba(255,255,255, 1) solid;
      /* max-width: 250px; */
  }


   .my-img {
       object-fit:fill;
   }
</style>
