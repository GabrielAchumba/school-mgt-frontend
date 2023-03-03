<template>
  <div>
      <div class="row bg-primary">
            <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
              <h5 class="text-center text-accent">Categories
                <br>
              </h5>
            </div>
          </div> 

          <CardList
          :cardList="categories"
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
           categories: [
             { 
               name: "categoryN500",
               title: "Category ₦500.00", 
               description: "User enters this category with ₦500.00 only.",
               image: "/statics/images/N50.png",
             },
             { 
               name: "categoryN1000",
               title: "Category ₦1000.00", 
               description: "User enters this category with ₦1000.00 only.",
               image: "/statics/images/N100.png",
             },
             { 
               name: "categoryN2000",
               title: "Category ₦2000.00", 
               description: "User enters this category with ₦2000.00 only.",
               image: "/statics/images/N200.png",
             },
             { 
               name: "categoryN5000",
               title: "Category ₦5000.00", 
               description: "User enters this category with ₦5000.00 only.",
               image: "/statics/images/N500.png",
             },
             { 
               name: "categoryN10000",
               title: "Category ₦10000.00", 
               description: "User enters this category with ₦10000.00 only.",
               image: "/statics/images/N1000.png",
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
            console.log("selectedCategory: ", selectedCategory)
            var context = this;
            var isUser = true;
            console.log("context.IdentityModel: ", context.IdentityModel)
            if(Object.keys(context.IdentityModel).length == 0) isUser = false
            console.log("isUser: ", isUser)
            switch(selectedCategory){
              case 'categoryN500':
                if(isUser == false) this.$router.push('/categoryN500Levels');
                else this.$router.push('/user-categoryN500Levels');
              break;
              case 'categoryN1000':
                if(isUser == false) this.$router.push('/categoryN1000Levels');
                else this.$router.push('/user-categoryN1000Levels');
              break;
              case 'categoryN2000':
                if(isUser == false) this.$router.push('/categoryN2000Levels');
                else this.$router.push('/user-categoryN2000Levels');
              break;
              case 'categoryN5000':
                if(isUser == false) this.$router.push('/categoryN5000Levels');
                else this.$router.push('/user-categoryN5000Levels');
              break;
              case 'categoryN10000':
                if(isUser == false) this.$router.push('/categoryN10000Levels');
                else this.$router.push('/user-categoryN10000Levels');
              break;
            }
          }
        }
    }
</script>


