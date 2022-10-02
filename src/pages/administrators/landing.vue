<template>
  <div class="bg-primary">
       <CardList 
       :cardList="cardList"
       @showPage="showPage($event)"/>

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
  import CardList from "../../components/Cards/CardList.vue";
  import MessageBox from "../../components/dialogs/MessageBox.vue";

    export default {
        components:{
          CardList,
          MessageBox,
        },
        data () {
          return {
            cardList: [
              {
                name: "showPage",
                title: "Staff", 
                description: "The employees of the schools",
                image: "/statics/images/about_1.jpg",
                to: "/staff-landing"
              },
              {
                name: "showPage",
                title: "Class Rooms", 
                description: "The school's class rooms",
                image: "/statics/images/about_2.jpg",
                to: "/class-room-landing"
              },
              {
                name: "showPage",
                title: "Subjects", 
                description: "Subjects that students learn in the school",
                image: "/statics/images/about_3.jpg",
                to: "/subject-landing"
              },
            ],
            dialogs:[
                { title: "Delete Staff", isVisible: false, message: "Do you want to delete a staff",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Staff deleted successfully!",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Failure", isVisible: false, message: "",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
            ]
          }
        },
        methods:{
            showPage(payload){
                this.$router.push(payload.to)
            }
        }
    }
</script>

<style>
</style>