<template>
  <div>
      <div class="row bg-primary">
            <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
              <h5 class="text-center text-accent">Category ₦5000.00
                <br>
              </h5>
            </div>
          </div> 

          <CardList
          :cardList="n5000ROIs"/>
  </div>
</template>


<script>
  import CardList from "../../components/Cards/CardList.vue"
  import { get } from "../../store/modules/services";
  import { cyclesController } from "../../store/modules/backendRoutes";

    export default {
        props: {
          theme_color: {
              type: String,
              default: '#10731f',
        },
      },
      components:{
        CardList,
      },
      data(){
        return {
          n5000ROIs: [],
          images: [
            "N50",
            "N100",
            "N200",
            "N500",
            "N1000",
            "N1000",
            "N1000",
          ]
        }
      },
      methods:{
        countDownLiners(index){
          return Math.pow(3,(index+1))
        },
      },
      async created(){
        var context =  this;
        const payload = {
          url: `${cyclesController}/getrois`,
          req: {}
        }
        var response = await get(payload)
        
        const { 
              data : {
                data: {
                  n5000ROIs
                },
                success,
              }
        } = response

        if(success){
          let sum = 0;
          context.n5000ROIs = n5000ROIs.map((n5000ROI, index) => {
            const downLiners = Math.pow(3,(index+1));
            sum = sum + Number(n5000ROI.replaceAll(',', ''))
            return {
                title: `Level ${index + 1} `, 
                description: `Contributor (Category ₦5000.00) receives ₦${n5000ROI} after completing Level ${index+1}. This Level has ${downLiners} downliners.`,
                image:  `/statics/images/${context.images[index]}.png`,
              }
          });

          var len = context.images.length - 1;
          context.n5000ROIs.push({
                title: "Total", 
                description: `Total return on investmenst received after completing this category levels is ₦${sum}.00`,
                image: `/statics/images/${context.images[len]}.png`,
              })
        }
      }
    }
</script>

<style>
</style>