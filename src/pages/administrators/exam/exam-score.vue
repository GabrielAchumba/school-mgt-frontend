<template>
    <div class="q-pa-md">
        <div class="row q-pa-md flex flex-center">
            <Chart/>
        </div>
        <div class="row">
            <p class="col-12 q-pa-sm text-center text-h6">You scored {{ score }} of {{ totalNumber  }} Questions</p>
            <p class="col-12 q-pa-sm text-center text-h6">The Assessment is on {{ subjectName }}, {{ levelName }} {{ year }} </p>
        </div>
    </div>
</template>

<script>
import Chart from "../../../components/Charts/Chart.vue";
export default {
    computed:{
        subjectName(){
          return this.$store.getters["examStore/subjectName"];
        },
        levelName(){
          return this.$store.getters["examStore/levelName"];
        },
        year(){
          return this.$store.getters["examStore/year"];
        },
        score(){
          return this.$store.getters["examStore/score"];
        },
        totalNumber(){
          return this.$store.getters["examStore/totalNumber"];
        },
        percentage(){
          return this.$store.getters["examStore/percentage"];
        },
    },
    components:{
        Chart
    },
    created(){
        this.$store.commit("authenticationStore/setIsError", false);
        this.$store.commit("authenticationStore/setErrorMessages", "");
        this.$store.commit("authenticationStore/setPageTitle", "Scores")
    }
}
</script>
