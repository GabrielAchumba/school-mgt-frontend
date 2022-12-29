<template>
    <div class="q-pa-md">
        <div class="row">
            <p class="col-6 q-pa-sm text-center text-h6">Subject: </p>
            <p class="col-6 q-pa-sm text-center text-h6">{{ subjectName }}</p>
        </div>
        <div class="row">
            <p class="col-6 q-pa-sm text-center text-h6">Level: </p>
            <p class="col-6 q-pa-sm text-center text-h6">{{ levelName }}</p>
        </div>
        <div class="row">
            <p class="col-6 q-pa-sm text-center text-h6">Year: </p>
            <p class="col-6 q-pa-sm text-center text-h6">{{ year }}</p>
        </div>
        <div class="row">
            <p class="col-6 q-pa-sm text-center text-h6">Score: </p>
            <p class="col-6 q-pa-sm text-center text-h6">{{ score }} of {{ totalNumber  }}</p>
        </div>
        <div class="row">
            <p class="col-6 q-pa-sm text-center text-h6">Percentage: </p>
            <p class="col-6 q-pa-sm text-center text-h6">{{ calculatePercentage() }}</p>
        </div>
    </div>
</template>

<script>

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
        }
    },
    methods:{
        calculatePercentage(){
            var context = this;
            const dp = 0;
            const score = this.$store.getters["examStore/score"];
            const totalNumber = this.$store.getters["examStore/totalNumber"];
            const percentage = ((score/totalNumber) * 100).toFixed(dp);
            return percentage;
        }
    },
    created(){
        this.$store.commit("authenticationStore/setIsError", false);
        this.$store.commit("authenticationStore/setErrorMessages", "");
    }
}
</script>
