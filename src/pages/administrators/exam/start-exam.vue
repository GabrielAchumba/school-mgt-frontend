<template>
  <div class="q-pa-md">
    <div>
      <q-space/>
      <p>{{ minutes }}: {{ seconds }} of 60 minutes</p>
    </div>

    <div>
      <!-- <p class="q-pa-sm text-h6" style="white-space: pre-line">{{ selectedQuestion }}</p> -->
      <p class="q-pa-sm" v-html="selectedQuestion"></p>
    </div>

    <div 
    v-if="isImage"
    class="q-pa-sm">
      <img 
          :src="selectedImageUrl"
          spinner-color="accent"/>
    </div>
    
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
        <q-btn class="q-ma-sm bg-accent text-primary"
          v-for="qBtn in qBtns" 
          :key="qBtn.label"
          :label="qBtn.label"
          type="button"
          size="sm"
          :icon="qBtn.icon"
          no-caps
          @click="ClickAction(qBtn.name)"
        />
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

    <q-dialog 
            v-for="dialog in dialogs" 
            :key="dialog.title"
            v-model="dialog.isVisible">
            <MessageBox
            :title="dialog.title"
            :message="dialog.message"
            :okayEvent="dialog.okayEvent"
            :cancelEvent="dialog.cancelEvent"
            @cancelDialog="cancelDialog($event)"
            @okDialog="okDialog($event)"
            >
            </MessageBox>
        </q-dialog>

  </div>
</template>

<script>
import { post } from "../../../store/modules/gcp-services";
import MessageBox from "../../../components/dialogs/MessageBox.vue";

export default {
    computed:{
      setIsResponsive(){
          const width = window.innerWidth;
          if(width < 700) return true;
          else return false;
        }
    },
    components:{
      MessageBox,
    },
    data(){
        return {
            dialogs: [
              { title: "Submit Answers", isVisible: false, message: "Do you want to submit your results",
              okayEvent: "okDialog", cancelEvent: "cancelDialog" },
            ],
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
            answersIndex:[],
            questions: [],
            qBtns: [
              {label: "Back", name: "Back", icon: ""},
              {label: "Next", name: "Next", icon: ""},
              {label: "Submit", name: "Submit", icon: ""}
              ],
            counter: -1,
            selectedQuestion: "",
            selectedImageUrl: "",
            isImage: false,
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
            context.submit();
            break;
        }
      },
      cancelDialog(payload){
          const context = this;
          var i = -1;
          for(const dialog of context.dialogs){
              i++;
              if(dialog.title === payload){
                  context.dialogs[i].isVisible = false;
                  break;
              }
          }
      },
      submit(){
          const context = this;
          var i = -1;
          for(const dialog of context.dialogs){
              i++;
              if(dialog.title == "Submit Answers"){
                  context.dialogs[i].isVisible = true;
                  break;
              }
          }
      },
      async okDialog(payload){
          console.log("payload: ", payload)
          const context = this;
          var i = -1;
          for(const dialog of context.dialogs){
              i++;
              if(dialog.title === payload){
                  switch(payload){
                      case "Submit Answers":
                          await context.submitAnsweredQuestions();
                          break;
                  }
                  context.dialogs[i].isVisible = false;
                  break;
              }
          }
      },
      setAnswerOption(optionsIndices){
        let ans = "No Answer";
        let i = -1;
        const options = ["A", "B", "C", "D", "E", "F", "G"];
        for(const optionsIndex of optionsIndices){
          i++;
          if(optionsIndex !== -1){
            ans = options[i];
            break;
          }
        }
        return ans
      },
      submitAnsweredQuestions(){
        var context = this;
        var user = this.$store.getters["authenticationStore/IdentityModel"];
        let answeredQuestions = [];
        let i = -1;

        const totalNumber = context.questions.length;
        let score = 0;
        for(const question of context.questions){
          i++;
          const answerOption = context.setAnswerOption(context.answersIndex[i]);
          if(answerOption ===  question.answer){
                score++;
          }
        }

        this.$store.commit("examStore/setScore", score);
        this.$store.commit("examStore/setTotalNumber", totalNumber);

       /*  var layout = { 
            title: '',
            height: 200,
            width: 400,
            margin: {"t": 0, "b": 0, "l": 0, "r": 0},
            showlegend: false,
            plot_bgcolor:"rgb(27, 25, 25)"
            
        }; */


        var labels = ["Passed", "Failed"];
        const dp = 0;
        const percentage = ((score/totalNumber) * 100).toFixed(dp);
        var passed = percentage;
        var failed = 100 - passed;
        var values = [passed, failed];

        var layout = {
          title: '',
          height: 200,
          width: 400,
          margin: {"t": 0, "b": 0, "l": 0, "r": 0},
          annotations: [
            {
              font: {
                size: 25
              },
              showarrow: false,
              text: `${percentage}%`,
            },
          ],
          showlegend: true,
          legend: {"orientation": "h"}
        };

        const valueDrists = {
          values: values,
          labels: labels,
          name: 'Score',
          hoverinfo: 'label+percent+name',
          hole: .7,
          automargin: true,
          type: 'pie',
          text: `${percentage}%`,
          marker: {
            colors: [
              'rgb(5, 102, 8)',
              'rgb(255, 0, 0)'
            ]
          },
        }

            
            
        var data = [valueDrists]
        this.$store.commit("examStore/setPercentage", percentage);
        this.$store.commit("chartStore/setSeriesCollection", data)
        this.$store.commit("chartStore/setLayout", layout)
        this.$store.commit("chartStore/setTitle", "")
        this.$store.commit("chartStore/setIsQbar", false);
        this.$router.push('/exam-score')
      },
      onOptionSelected(selectedOption){
            var context = this;
            //console.log("selectedOption: ", selectedOption)
            //console.log("context.answerOptions: ", context.answerOptions)
            //console.log("conttext.vmodel: ", context.vmodel)
            //context.answersIndex
            
            let j = -1;
            let selectedIndex = -1;
            for(const answerOption of context.answerOptions){
              j++;
              if(answerOption.val === selectedOption){
                context.answerOptions[j].vmodel = context.vmodel;
                selectedIndex = j;
                break;
              }
            }

            //console.log("selectedIndex: ", selectedIndex)
            let check = true;
            if(selectedIndex !== -1){
              for(let i = 0; i < context.answers.length; i++){
                  if(context.answers[i].questionId === context.answerOptions[selectedIndex].questionId){
                    context.answersIndex[i] = context.answerOptions.map((row) => {
                      return -1;
                    })
                      context.answers[i] = context.answerOptions[selectedIndex];
                      context.answers[i].vmodel = context.vmodel;
                      context.answersIndex[i][selectedIndex] = selectedIndex;
                      check = false;
                      break;
                  }
              }
            }

            //console.log("onOptionSelected answers", context.answers)
          //console.log("onOptionSelected answersIndex", context.answersIndex)
            
        },
        getAnswerOptions(){
          var context = this;
          let selectedOption = "@*%#";

          //console.log("context.counter: ", context.counter)
          context.answerOptions = context.questions[context.counter].answerOptions.map((row, i) => {
            let ans = {
              vmodel: "", 
              val:  row.answer, 
              label: `(${context.options[i].value}) ${row.answer}`, 
              color: "green", 
              questionId: context.questions[context.counter]._id, 
              subjectId: context.questions[context.counter].subjectId, 
              levelId: context.questions[context.counter].levelId,
              }

              if(context.answersIndex[context.counter][i] !== -1) {
                ans.vmodel = row.answer;
                selectedOption = row.answer
                context.vmodel = selectedOption;
                //console.log("selectedOption: ", selectedOption)
              }else{
                 ans.vmodel = "";
              }

            return ans
          })

          //console.log("selectedOption", selectedOption)
          context.onOptionSelected(selectedOption)

          //console.log("getAnswerOptions answers ", context.answers)
          //console.log("getAnswerOptions answersIndex ", context.answersIndex)
        },
        nextQuestion(){
          var context = this;
          context.counter++;
          if(context.counter > context.questions.length -1){
            context.counter = context.questions.length -1;
          }

          context.selectedQuestion = `Question ${context.counter+1}: ${context.questions[context.counter].question}`;
          context.isImage = false;
          if(context.questions[context.counter].cloudImageUrl !== ""){
            context.selectedImageUrl = context.questions[context.counter].cloudImageUrl;
            context.isImage = true;
          }
        
          
          //console.log("context.selectedQuestion: ", context.selectedQuestion)
          context.getAnswerOptions();
          
        },
        previousQuestion(){
          var context = this;
          context.counter--;

          if(context.counter < 0){
            context.counter = 0;
          }

          context.selectedQuestion = `Question ${context.counter+1}: ${context.questions[context.counter].question}`;
          context.isImage = false;
          if(context.questions[context.counter].cloudImageUrl !== ""){
            context.selectedImageUrl = context.questions[context.counter].cloudImageUrl;
            context.isImage = true;
          }
          context.getAnswerOptions();
        },
        initializeAnswers(){
          var context =  this;
          context.answers = [];
          const len = context.questions.length;
          let i = 0;
          for(i = 0; i < len; i++){
            const optionsIndex = context.questions[i].answerOptions.map((row) => {
              return -1;
            })
            context.answersIndex.push(optionsIndex)
            context.answers.push({
              vmodel: "", 
              val: "line", 
              label: "(A) Line", 
              color: "green", 
              questionId: context.questions[i]._id, 
              subjectId: context.questions[i].subjectId,  
              levelId: context.questions[i].levelId
              })
          }

          //console.log("initializeAnswers answers", context.answers) 
          //console.log("initializeAnswers answersIndex", context.answersIndex)
        },
        renderTimer(){
          var context = this;
          context.count += 1;
          context.minutes = Math.floor(context.count / 60).toString().padStart(2, "0");
          context.seconds = (context.count % 60).toString().padStart(2, "0");
        }
    },
    async mounted() {
        var context =  this;
       setInterval(() => { context.renderTimer() }, 1000);
       if(context.minutes === "60"){
         console.log("context.minutes: ", context.minutes)
         await context.submitAnsweredQuestions();
       }
    },
    created(){
      var context = this;
      context.questions = this.$store.getters["examStore/questions"];
      context.initializeAnswers();
      context.nextQuestion();
      this.$store.commit("authenticationStore/setIsError", false);
      this.$store.commit("authenticationStore/setErrorMessages", "");
      const subjectName = this.$store.getters["examStore/subjectName"];
      const levelName = this.$store.getters["examStore/levelName"];
      const year =  this.$store.getters["examStore/year"];
      this.$store.commit("authenticationStore/setPageTitle", `${subjectName} ${levelName} ${year}`)
    }
}
</script>

<style scoped>
.geeks {
      width:60%;
      /* height:300px; */
  }
  img {
      width:100%;
      height:100%;
  }
</style>
