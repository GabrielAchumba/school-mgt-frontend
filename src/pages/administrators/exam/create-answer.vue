<template>
  <div class="q-pa-md">
    <q-list>
      <!--
        Rendering a <label> tag (notice tag="label")
        so QRadios will respond to clicks on QItems to
        change Toggle state.
      -->

      <q-item 
      tag="label" 
      v-for="answerOption in answerOptions" :key="answerOption.val"
      v-ripple>
        <q-item-section avatar>
          <q-radio 
          v-model="vmodel" 
          :val="answerOption.val" 
          :color="answerOption.color" 
           @input="onOptionSelected($event)"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ answerOption.label }}</q-item-label>
        </q-item-section>
      </q-item>

      <!-- <q-item tag="label" v-ripple>
        <q-item-section avatar>
          <q-radio v-model="color" val="orange" color="orange" 
         @input="onOptionSelected($event)"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>Orange o oooooooooooooooooooooooooooooooooo</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section avatar top>
          <q-radio v-model="color" val="cyan" color="cyan" 
          @input="onOptionSelected($event)"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>Cyan cccccccccccccccccccccccccccccccccccccccccccc</q-item-label>
        </q-item-section>
      </q-item> -->
    </q-list>

  </div>
</template>

<script>

export default {
    data(){
        return {
            vmodel: "",
            name: "answers",
            color: "cyan",
            shape: "line",
            answerOptions: [
                {vmodel: "", val: "line", label: "(A) Line", color: "green", questionId: "", subjectId: "", levelId: ""},
                {vmodel: "", val: "rectangle", label: "(B) Rectangle", color: "green", questionId: "", subjectId: "", levelId: ""},
                {vmodel: "", val: "ellipse", label: "(C) Ellipse", color: "green", questionId: "", subjectId: "", levelId: ""},
                {vmodel: "", val: "polygon", label: "(D) Polygon", color: "green", questionId: "", subjectId: "", levelId: ""}
            ],
            answers:[]
        }
    },
    methods:{
        onOptionSelected(selectedOption){
            console.log("selectedOption: ", selectedOption)
            var context = this;
            let answerOption = context.answerOptions.find(o => o.questionId === selectedOption);
            let check = true;
            for(let i = 0; i < this.answers.length; i++){
                if(answers.questionId === answerOption.questionId){
                    answers[i] = answerOption;
                    check = false;
                    break;
                }
            }

            if(!check){
                answers.push({...answerOption})
            }
            
        }
    }
}
</script>
