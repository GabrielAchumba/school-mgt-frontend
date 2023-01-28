<template>
  <div>
        <div class="row bg-primary">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm"
                v-for="(card) in cardList" :key="card.sn">
                <div class="row">
                    <div 
                    class="col-5 q-pa-md text-left" 
                    avatar>
                    <q-avatar 
                    v-if="getIsUserPhoto(card)" 
                    class="bg-primary text-accent">
                        <q-img
                            :src="card.image"
                        />
                        </q-avatar>
                        <q-avatar 
                        v-else
                        class="bg-accent text-primary"> 
                        {{ card.firstName.charAt(0) }}
                        </q-avatar>
                    </div>
                    <div class="col-7 text-right">
                        <span><p>{{ card.title }}</p>
                        <p>{{ card.description }}</p></span>
                        <div class="row q-pa-sm">
                        <q-space />
                        <div class="text-right">
                            <q-btn class="q-ma-sm bg-accent text-primary"
                            v-for="qBtn in card.qBtns" 
                            :key="qBtn.label"
                            :label="qBtn.label"
                            :disabled="qBtn.btnDisabled"
                            type="button"
                            size="md"
                            no-caps
                            @click="BtnClickAction(qBtn.name, card)"
                        />
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
  </div>
</template>

<script>

    export default {
        props: {
            cardList: {
                type: Array,
                default: [],
            }
        },
        methods:{
            BtnClickAction(btnName, card) {
                this.$emit(btnName, card); 
            },
            getIsUserPhoto(card){
                if(card.image != "" &&
                card.image != undefined){
                    return true
                }else{
                    return false
                }
            },
        }
    }
</script>

<style>
.card {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: auto;
  height: auto;
}

.my-card{
      width: 100%;
      height: 200px;
      border: 1px  rgba(255,255,255, 1) solid;
      /* max-width: 250px; */
  }
</style>
