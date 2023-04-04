<template>
    <div class="row">
        <div class="col-12 text-center q-pa-sm">
            <p v-if="saveComplete" class="text-green"><b>{{ savingStatus }} {{ minutes }} minutes: {{ seconds }} seconds</b></p>
            <p v-if="!saveComplete" class="text-green"><b>{{ savingStatus }}</b></p>
            <p v-if="saveError" class="text-secondary"> {{ message }} </p>
        </div>
    </div>
</template>

<script>

export default {
    props:{
        message:{
            type: String,
            default: "",
        },
        saveError:{
            type: Boolean,
            default: false,
        },
        saveComplete:{
            type: Boolean,
            default: false,
        },
        savingStatus:{
            type: String,
            default: "",
        }
    },
    data(){
        return {
            count: 0,
            minutes: 0,
            seconds: 0,
        }
    },
    methods:{
      renderTimer(){
        var context = this;
        context.count += 1;
        context.minutes = Math.floor(context.count / 60).toString().padStart(2, "0");
        context.seconds = (context.count % 60).toString().padStart(2, "0");
      }

    },
    mounted() {
      var context =  this;
      setInterval(() => { context.renderTimer() }, 1000);
      if(context.saveComplete === false){
        context.count = 0;
      }else{
          this.$emit("updateStatusBar", {
              minutes: context.minutes,
              seconds: context.seconds,
          })
      }
    },
}
</script>
