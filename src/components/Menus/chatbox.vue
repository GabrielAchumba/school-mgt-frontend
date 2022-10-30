<template>
    <div class="row" style="height:400px; width:400px;">

        <div class="col-12" style="height:85%;">
            <q-chat-message
                v-for="message in messages"
                :key="message._id"
                :name="message.fromUser"
                :text="[message.message]"
                :sent="message.fromId == `${userId}` ? true : false"
            />
        </div>

        <div class="col-12" style="height:15%;">
           <q-toolbar class="bg-accent">
               <!-- <q-form @submit="sendMessage"> -->
                    <q-input
                    class="full-width"
                    bg-color="primary"
                    outlined
                    rounded
                    v-model="newMessage"
                    label="Message"
                    type="textarea"
                    dense>

                        <template v-slot:after>
                            <q-btn
                            round
                            dense
                            flat
                            @click="sendMessage"
                            color="primary"
                            icon="send"/>
                        </template>
                    </q-input>
               <!-- </q-form> -->
            </q-toolbar> 
        </div>
    </div>
</template>

<script>
 export default {
     computed: {
        selectedRequest(){
            return {}; //this.$store.getters['services/selectedRequest'];
        },
        messages(){
            return []; //this.$store.getters['services/messages'];
        }
      },
     data(){
         return {
             newMessage: "",
             senderId: "",
             userId: "q5BWI13pPHUDB2NF9iGYkj6g72h2",
              //avadore = "q5BWI13pPHUDB2NF9iGYkj6g72h2"
             //chris kay = "sVHhI2Ll66V0at6pwhhjuZP4MVw1"
         }
     },
     methods:{
         sendMessage(){

         },
          /* async loadMessage(){
                var context = this;
                console.log("context.selectedRequest: ", context.selectedRequest)
                context.senderId = context.selectedRequest.ownerId._id
                var url = `chat/index/${context.senderId}/${context.selectedRequest._id}`;
                var response = await this.$store.dispatch('services/get', {
                url
                })

            
                const { 
                    data : {
                        data: result,
                        message,
                        success,
                    }
                } = response
                console.log('messages: ', result)
                if(success){
                    this.$store.commit('services/setMessages', result)
                }else{
                    this.$store.commit('services/setMessages', [])
                }
        }, */
        /* async sendMessage(){
            var context = this;
            console.log("context.newMessage: ", context.newMessage)
             
            var url = `chat/store`;
            const payload = {
                url,
                req: {
                    fromId: context.userId,
                    toId: context.senderId,
                    requestId: context.selectedRequest._id,
                    requestTitle: context.selectedRequest.title,
                    message: context.newMessage,
                    files: []
                }
            }
            var response = await this.$store.dispatch('services/post', payload)

            const { 
                data : {
                    message,
                    success,
                }
            } = response
            if(success){
                await context.loadMessage();
            }else{
                this.$store.commit('services/setMessages', [])
            }
         } */
     },
     created(){
         /* var context = this;
         await context.loadMessage(); */
         
       
        
     }
 }
</script>