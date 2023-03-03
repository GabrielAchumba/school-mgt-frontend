<template>
  <div>
      <div class="row bg-primary">
            <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
              <h5 class="text-center text-accent">Skills & Acquisition (Our Partners)
                <br>
              </h5>
            </div>
          </div> 

          <CardList
          :cardList="skillAquisitions"
          cardClickEvent="cardClickEvent"
          @cardClickEvent="cardClickEvent($event)"/>
  </div>
</template>

<script>
  import CardList from "../../components/Cards/CardList.vue"
    export default {
      computed: {
        IdentityModel(){
            return this.$store.getters['authenticationStore/IdentityModel'];
        },
       },
       components:{
         CardList,
       },
       data(){
         return {
           skillAquisitions: [
             { 
               name: "blockChain",
               title: "Block Chain & Crypto Technology", 
               description: "Choose a blockchain technology center for your training",
               image: "/statics/images/Blockchain.png",
             },
             { 
               name: "forexTrade",
               title: "Forex Trading", 
               description: "Choose a forex tading technology institute for your training",
               image: "/statics/images/ForexTrading.png",
             },
             { 
               name: "computerProgramming",
               title: "Computer Programming", 
               description: "Excellently learn computer programming languages",
               image: "/statics/images/ComputerProgramming.png",
             },
             { 
               name: "dataScience",
               title: "Data Science & Machine Learning", 
               description: "Efficently acquire machine learning skills for your robotics and artificial intelligence",
               image: "/statics/images/MachineLearning.png",
             },
             { 
               name: "interiorDecorations",
               title: "Interior Decorations", 
               description: "Learn how to design and manufacture curtains, bedsheets, throw pillows, etc",
               image: "/statics/images/InteriorDecorations.png",
             },
             { 
               name: "fashionsDesign",
               title: "Fashions and Design", 
               description: "Learn quality fashion design from our partner",
               image: "/statics/images/FashionDesigns.png",
             },
           ]
         }
       },
        props: {
            theme_color: {
                type: String,
                default: '#10731f', //'rgb(0, 163, 82)'
            }
        },
        methods:{
          cardClickEvent(payload){
            var context = this;
            context.showLevelsPage(payload);
          },
          showLevelsPage(selectedCategory){
            var context = this;
            var isUser = true;
            if(Object.keys(context.IdentityModel).length == 0) isUser = false

            switch(selectedCategory){
              case 'blockChain':
                if(isUser == false) this.$router.push('/categoryN500Levels');
                else this.$router.push('/user-categoryN500Levels');
              break;
              case 'forexTrade':
                if(isUser == false) this.$router.push('/categoryN1000Levels');
                else this.$router.push('/user-categoryN1000Levels');
              break;
              case 'computerProgramming':
                if(isUser == false) this.$router.push('/categoryN2000Levels');
                else this.$router.push('/user-categoryN2000Levels');
              break;
              case 'dataScience':
                if(isUser == false) this.$router.push('/categoryN5000Levels');
                else this.$router.push('/user-categoryN5000Levels');
              break;
              case 'interiorDecorations':
                if(isUser == false) this.$router.push('/categoryN10000Levels');
                else this.$router.push('/user-categoryN10000Levels');
              break;
              case 'fashionsDesign':
                if(isUser == false) this.$router.push('/categoryN10000Levels');
                else this.$router.push('/user-categoryN10000Levels');
              break;
            }
          }
        }
    }
</script>


