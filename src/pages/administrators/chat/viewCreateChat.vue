<template>
    <q-page class="flex column">
        <div class="row bg-primary text-accent">
            <q-btn 
                v-if="$route.fullPath.includes('/view-chat')"
                v-go-back.single
                icon="arrow_back"
                flat
                dense
                />
            <q-space /> 
            <div class="text-center">
                <p class="text-h6 q-pa-sm">{{toUser.fullName }}</p>
            </div>
        </div>

        <div class="q-pa-sm">
            <small v-if="typing">{{toUser.fullName}} is typing...</small>
        </div>

        <q-separator/>

        <div class="q-pa-md column col justify-end">
            <q-chat-message
                v-for="item in messages"
                :key="item.time"
                :name="item.fromFullName"
                :text="[item.message]"
                :sent="item.fromId == `${fromUser.categoryId}` ? true : false"
            />
        </div>

        <q-footer>
           <q-toolbar class="bg-accent">
                    <q-input
                    ref="chatbox"
                    class="full-width"
                    bg-color="primary"
                    outlined
                    rounded
                    v-model="newMessage"
                    label="Message"
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
        </q-footer>
    </q-page>
</template>

<script>
import io from "socket.io-client";
import { form } from "./view_models/viewCreateChatVM";
import { post } from "../../../store/modules/gcp-services"
 export default {
     data(){
         return {
             toUser: {},
             fromUser: { fromId: "" },
             meetingId: "123",
             socket: null,
             serverUrl: "https://school-mgt-backend-nestjs.herokuapp.com/", //"http://localhost:4000/", 
             newMessage: null,
            messages: [],
            typing: false,
            username: null,
            ready: false,
            info: [],
            connections: 0,
            deviceId: "",
            selectedDesignation: {},
            selectedCategory: "",
            form
         }
     },
     watch: {
        newMessage(value) {
            var context = this;
            value ? context.socket.emit('typing', context.fromUser.username) : context.socket.emit('stopTyping')
        }
    },
     methods:{
        send() {
            var context = this;
            const msg = {
                    appName: "TORPA",
                    time: Date.now(),
                    fromId: context.fromUser.categoryId,
                    toId: context.toUser.categoryId,
                    fromUserName: context.fromUser.username,
                    toUserName: context.toUser.username,
                    fromFullName: context.fromUser.fullName,
                    toFullName: context.toUser.fullName,
                    message: context.newMessage,
                    meetingId: context.meetingId,
                    images: [], //files urls
                    messageStatus: "unread",
                    selectedCategory: context.selectedCategory,
            }
            context.messages.push(msg);
            console.log("socket.emit: ", msg)
            context.socket.emit('chat-message', msg);
            context.newMessage = null;
        },
        connectToWebsocket() {
            var context = this;
            context.socket = io(context.serverUrl, {
                transports: ["websocket"],
            });
            //context.socket = io(context.serverUrl);
        },
        async loadMessages(){
            var context = this;
            context.messages = []
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            
            console.log("context.fromUser: ", context.fromUser)
            const payload = {
                url: "story/messagesByOneFriend",
                req: {
                    fromUser: {
                        id: user.id,
                        username: user.username,
                        fullName: user.fullName,
                    },
                    toUser: {
                        id: context.toUser.categoryId,
                        username: context.toUser.username,
                        fullName: context.toUser.fullName,
                    },
                    selectedCategory: context.selectedCategory,
                }
            }
            //console.log("payload: ", payload)
            const response = await post(payload) 
            if(response.data.length > 0){
                context.messages = response.data.map((row) => {
                    return {
                        ...row,
                        fromUserName: row.fromUser,
                        toUserName: row.toUser,
                    }
                })
                console.log("context.messages: ", context.messages)
            }
        },
     },
     destroyed(){
         //Save unread chat messages are read chat messages
         console.log("destroyed")
     },
     async created(){
        var context = this;
        context.toUser = this.$store.getters["authenticationStore/toUser"];
        console.log("context.toUser: ", context.toUser)
        context.selectedDesignation = this.$store.getters["authenticationStore/selectedDesignation"];
        context.selectedCategory = context.selectedDesignation.type;
        await context.loadMessages();
        context.connectToWebsocket(); 
        //context.addUser();
        // 4.5.3
        //1.2.0
        /* window.onbeforeunload = () => {
            socket.emit('leave', context.username);
        } */
            
        context.socket.on('chat-message', (data) => {
            
            if(data){
                if(context.toUser.username === data.fromUserName){
                    context.messages.push({
                        time: data.id,
                        fromId: data.fromId,
                        toId: data.toId,
                        fromUserName: data.fromUserName,
                        toUserName: data.toUserName,
                        fromFullName: data.fromFullName,
                        toFullName: data.toFullName,
                        message: data.message,
                        meetingId: data.meetingId,
                        appName: data.appName,
                        messageStatus: data.messageStatus,
                        selectedCategory: context.selectedCategory
                    });
                }
            }
        });
        context.socket.on('typing', (data) => {
            if(context.toUser.username === data){
                context.typing = data;
            }
        });
        context.socket.on('stopTyping', () => {
                context.typing = false;
        });
        context.socket.on('connected', (deviceId) => {
            context.deviceId = deviceId;
            console.log("context.deviceId: ", context.deviceId)
        });
        this.$refs.chatbox.$el.focus()
            /* socket.on('joined', (data) => {
                context.info.push({
                    username: data,
                    type: 'joined'
                });
                setTimeout(() => {
                    context.info = [];
                }, 5000);
            }); */
            /* socket.on('leave', (data) => {
                context.info.push({
                    username: data,
                    type: 'left'
                });
                setTimeout(() => {
                    context.info = [];
                }, 5000);
            }); */
           /*  socket.on('connections', (data) => {
                this.connections = data;
            }); */
         
       
        
     }
 }
</script>