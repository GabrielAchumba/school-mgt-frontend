<template>
  <div>
    <CategoryContributors
    :isFetchTableDialog="isFetchTableDialog"
    :columns="columns"
    :Categories="Categories"
    :title="title"/>
  </div>
</template>

<script>
  import CategoryContributors from "../../../components/CategoryAdmin/CategoryContributors.vue"
  import { categoryn10000Controller } from '../../../store/modules/backendRoutes'
    export default {
        computed: {
        Categories(){
            return this.$store.getters['categoryStore/Categories'];
        }
      },
      components:{
        CategoryContributors
      },
        data () {
    return {
            title: "Category N10000 List",
            columns: [
              { name: "fullName", label: "Full Name", field: "", align: "left" },
            ],
            isFetchTableDialog: false,
            message: "",
            }
        },
        props: {
            theme_color: {
            type: String,
            default: 'rgb(0, 163, 82)'
            }
        },
        methods: {
          okayEvent(){
            var context = this;
            context.isFetchTableDialog = false
          },
          cancelEvent(){
            var context = this;
            context.isFetchTableDialog = false
          },
        },
        async created() {
        var url = `${categoryn10000Controller}/getcategories`;
        var response = await this.$store.dispatch('categoryStore/GetCategories', {
          url
        })

        const { 
              data : {
                data: result,
                message,
                success,
              }
        } = response

        if(success){
          this.$store.commit('categoryStore/GetCategories', result)
        }else{
            var context = this;
            context.isFetchTableDialog = true;
            context.message = message;
        }

      }
    }
</script>
