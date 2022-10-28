<template>
  <div class="bg-primary">

        <div class="row text-center bg-primary flex flex-center">

         <!--    <div class="col-12">
                <q-pagination
                      v-model="page"
                      :min="currentPage" 
                      :max="totalPages"
                      direction-links
                      boundary-links
                      icon-first="skip_previous"
                      icon-last="skip_next"
                      icon-prev="fast_rewind"
                      icon-next="fast_forward"
                      class="text-primary bg-accent"
                      :input="true"
                      input-class="text-primary"
                >
                </q-pagination>
            </div> -->
            
            <div 
            v-for="(card) in cardList" :key="card.id"
            class="col-12 q-pa-sm">
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
                <p class="q-pa-sm text-h4">{{ card.title }}</p>
                <q-space></q-space>
                <p class="q-pa-sm">{{ card.createdDate }}</p>
                <q-card-section class="row bg-primary">
                  <div class="col-12 text-h7 text-accent text-left">
                    {{ card.description }}
                  </div>
                </q-card-section>
                <q-card-section class="row bg-primary">
                        <q-btn
                        class="col bg-accent text-primary"
                        round
                        @click="viewItem(card)">
                            <q-icon
                            name="arrow_forward">
                            </q-icon>
                        </q-btn>
                </q-card-section>
              </q-card>
            </div>

          <!-- </div> -->
        </div>
  </div>
</template>

<script>

    export default {
      computed:{
        getData(){
          return 	this.cardList.slice((this.page-1)*this.totalPages,((this.page-1)*this.totalPages+this.totalPages)+1)
        }
      },
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
      data(){
        return {
          page: 1,
          currentPage:1,
          nextPage: null,
          totalPages:5,
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
      },
      created(){
        var context = this;
        context.totalPages = Math.ceil(context.cardList.length/3);
        if(context.totalPages <= 0){
          context.totalPages = 1;
        }
      }
    }
</script>

<style>
</style>
