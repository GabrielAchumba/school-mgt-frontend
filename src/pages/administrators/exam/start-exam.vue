<template>
  <div class="q-pa-md">
    <div>
      <q-space/>
      <p>{{ minutes }}: {{ seconds }}</p>
    </div>
    <p class="q-pa-sm text-h6">{{ selectedQuestion }}</p>
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

    <div 
      v-if="setIsResponsive"
      class="row q-pa-sm">
        <q-space />
        <q-icon
          class="q-pa-md text-accent"
          v-for="qBtn in qBtns" 
          :key="qBtn.label" 
          :name="qBtn.icon"
          @click="ClickAction(qBtn.name)"
          size="30px">
            <q-tooltip>
              {{ qBtn.label }}
            </q-tooltip>
          </q-icon>
    </div>
      <div 
      v-else
      class="row q-pa-sm">
        <q-space />
        <q-btn class="q-ma-sm bg-accent text-primary"
          v-for="qBtn in qBtns" 
          :key="qBtn.label"
          :label="qBtn.label"
          type="button"
          size="md"
          :icon="qBtn.icon"
          no-caps
          @click="ClickAction(qBtn.name)"
        />
    </div>

  </div>
</template>

<script>

export default {
    computed:{
      setIsResponsive(){
          const width = window.innerWidth;
          if(width < 700) return true;
          else return false;
        }
    },
    data(){
        return {
            vmodel: "",
            name: "answers",
            color: "cyan",
            shape: "line",
            count: 0,
            minutes: 0,
            seconds: 0,
            answerOptions: [
                {vmodel: "", val: "line", label: "(A) Line", color: "green", questionId: "", subjectId: "", levelId: ""},
                {vmodel: "", val: "rectangle", label: "(B) Rectangle", color: "green", questionId: "", subjectId: "", levelId: ""},
                {vmodel: "", val: "ellipse", label: "(C) Ellipse", color: "green", questionId: "", subjectId: "", levelId: ""},
                {vmodel: "", val: "polygon", label: "(D) Polygon", color: "green", questionId: "", subjectId: "", levelId: ""}
            ],
            answers:[],
            questions: [],
            qBtns: [
              {label: "Back", name: "Back", icon: ""},
              {label: "Next", name: "Next", icon: ""},
              {label: "Submit", name: "Submit", icon: ""}
              ],
            counter: -1,
            selectedQuestion: "",
            options: [{id: 0, value: "A"}, {id: 1, value: "B"}, {id: 2, value: "C"}, 
                    {id: 3, value: "D"}, {id: 4, value: "E"}],
        }
    },
    methods:{
      ClickAction(actionName){
        var context = this;
        switch(actionName){
          case "Back":
            context.previousQuestion();
            break;
          case "Next":
            context.nextQuestion();
            break;
          case "Submit":
            break;
        }
      },
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
            
        },
        getAnswerOptions(){
          var context = this;
          context.answerOptions = context.questions[context.counter].answerOptions.map((row, i) => {
            return {
              vmodel: "", 
              val:  row.answer, 
              label: `(${context.options[i].value}) ${row.answer}`, 
              color: "green", 
              questionId: context.questions[context.counter].questionId, 
              subjectId: context.questions[context.counter].subjectId, 
              levelId: context.questions[context.counter].levelId,
              }
          })
        },
        nextQuestion(){
          var context = this;
          context.counter++;
          if(context.counter > context.questions.length -1){
            context.counter = context.questions.length -1;
          }

          context.selectedQuestion = `Question ${context.counter+1}: ${context.questions[context.counter].question}`;
          console.log("context.selectedQuestion: ", context.selectedQuestion)
          context.getAnswerOptions();
          
        },
        previousQuestion(){
          var context = this;
          context.counter--;

          if(context.counter < 0){
            context.counter = 0;
          }

          context.selectedQuestion = `Question ${context.counter+1}: ${context.questions[context.counter].question}`;
          context.getAnswerOptions();
        },
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
    },
    created(){
      var context = this;
      context.questions = this.$store.getters["examStore/questions"];
      console.log("context.questions: ", context.questions)
      context.nextQuestion();
    }
}
</script>
