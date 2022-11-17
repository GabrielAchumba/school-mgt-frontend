<template>
    <div class="row" style="height:400px; width:400px;">

        <div class="col-12 q-pa-sm">
            <small v-if="typing">{{toUserName}} is typing...</small>
        </div>

        <q-separator/>

        <div class="col-12" style="height:85%;">
            <q-chat-message
                v-for="message in messages"
                :key="message._id"
                :name="item.fromUserName"
                :text="[item.message]"
                :sent="item.fromId == `${fromId}` ? true : false"
            />
        </div>

        <div class="col-12" style="height:15%;">
           <q-toolbar class="bg-accent">
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
                            @click="send"
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
import io from "socket.io-client";
 export default {
     data(){
         return {
            toId: "",
            fromId: "",
            fromUserName: "",
            toUserName: "",
            socket: null,
            serverUrl: "http://localhost:4000",
            newMessage: null,
            messages: [],
            typing: false,
            username: null,
            ready: false,
            info: [],
            connections: 0,
         }
     },
     watch: {
        newMessage(value) {
            var context = this;
            value ? context.socket.emit('typing', context.fromUserName) : context.socket.emit('stopTyping')
        }
    },
    methods:{
        send() {
            var context = this;
            const msg = {
                    time: Date.now(),
                    fromId: context.fromId,
                    toId: context.toId,
                    fromUserName: context.fromUserName,
                    toUserName: context.toUserName,
                    message: context.newMessage,
                    images: [], //files urls
                    requestId: "",
                    requestTitle: "",
            }

            context.messages.push(msg);

            context.socket.emit('chat-message', msg);
            context.newMessage = null;
        },
        connectToWebsocket() {
            var context = this;
            context.socket = io(context.serverUrl, {
                transports: ["websocket"],
            });
        },
    },
    created(){
        var context = this;
        context.connectToWebsocket();

         context.socket.on('chat-message', (data) => {
            
            context.messages.push({
                time: data.id,
                fromId: data.fromId,
                toId: data.toId,
                fromUserName: data.fromUserName,
                toUserName: data.toUserName,
                message: data.message,
            });
        });

        context.socket.on('typing', (data) => {
            console.log("data: ", data);
            context.typing = data;
        });


        context.socket.on('stopTyping', () => {
            context.typing = false;
        });

        //+91 7328323606
        
    }
 }
</script>