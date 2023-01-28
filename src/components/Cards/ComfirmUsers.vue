<template>
     <div>
         <q-tabs
        v-model="tab"
        dense
        class="text-accent"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="unconfirmed" label="Unconfirmed" class="bg-accent text-primary" />
        <q-tab name="confirmed" label="Confirmed" class="bg-accent text-primary" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        
        <q-tab-panel name="unconfirmed">
          
         <span>
             <div class="row">
                 <div class="col-12 pagination">
                    <a href="#"
                    @click="backAction">&laquo;</a>
                    <a href="#"
                    v-for="page in pages" 
                    :key="page.sn"
                    @click="paginationAction(page)">{{ page.sn }}
                    </a>
                   <!--  <a href="#" class="active">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a> -->
                    <a href="#"
                     @click="nextAction">&raquo;</a>
                </div>
             </div>
        <q-list
        bordered>
            <q-item  
            v-for="card in unConfirmedCardList" 
            :key="card.sn"
            class="q-pa-sm" 
            clickable 
            v-ripple>
            <q-item-section>

                <div class="row">
                    <div class="col1 q-pa-sm">
                        <img :src="card.image">
                    </div>
                    <div class="col2 q-sa-sm">
                        <span>
                            <p>{{ card.title }} ({{ card.description }})</p>
                            <span>
                                <p class="q-ma-none">{{ card.qSelect.label }}</p>
                                <q-select
                                class="q-ma-none"
                                color="accent" 
                                outlined label-color="accent"
                                option-disable="inactive"
                                v-model="card.qSelect.value"
                                :options="card.qSelect.list"
                                option-value="id"
                                :option-label="'type'"
                                name="type"
                                emit-value
                                map-options
                                >
                                </q-select>
                            </span>
                            <div>
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
                        </span>
                    </div>
                    <hr class="col-12">
                </div>
            </q-item-section>
            </q-item>
        </q-list>
         </span>
        </q-tab-panel>

        <q-tab-panel name="confirmed">
          <span>
             <div class="row">
                 <div class="col-12 pagination">
                    <a href="#"
                    @click="backActionConfirmed">&laquo;</a>
                    <a href="#"
                    v-for="page in pagesConfirmed" 
                    :key="page.sn"
                    @click="paginationActionConfirmed(page)">{{ page.sn }}
                    </a>
                   <!--  <a href="#" class="active">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a> -->
                    <a href="#"
                     @click="nextActionConfirmed">&raquo;</a>
                </div>
             </div>
        <q-list
        bordered>
            <q-item  
            v-for="card in confirmedCardList" 
            :key="card.sn"
            class="q-pa-sm" 
            clickable 
            v-ripple>
            <q-item-section>

                <div class="row">
                    <div class="col1 q-pa-sm">
                        <img :src="card.image">
                    </div>
                    <div class="col2 q-sa-sm">
                        <span>
                            <p>{{ card.title }} ({{ card.description }})</p>
                            <span>
                                <p class="q-ma-none">{{ card.qSelect.label }}</p>
                                <q-select
                                class="q-ma-none"
                                color="accent" 
                                outlined label-color="accent"
                                option-disable="inactive"
                                v-model="card.qSelect.value"
                                :options="card.qSelect.list"
                                option-value="id"
                                :option-label="'type'"
                                name="type"
                                emit-value
                                map-options
                                >
                                </q-select>
                            </span>
                            <div>
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
                        </span>
                    </div>
                    <hr class="col-12">
                </div>
            </q-item-section>
            </q-item>
        </q-list>
         </span>
        </q-tab-panel>

      </q-tab-panels>
    </div>
</template>

<script>

    export default {
        props: {
            confirmedCardList: {
                type: Array,
                default: [],
            },
            unConfirmedCardList:{
                type: Array,
                default: [],
            },
            pages: {
                type: Array,
                default: [],
            },
            pagesConfirmed:{
                type: Array,
                default: [],
            }
        },
        data(){
            return {
                tab: 'unconfirmed',
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
            paginationAction(page){
                this.$emit("paginationAction", page);
            },
            paginationActionConfirmed(page){
                this.$emit("paginationActionConfirmed", page);
            },
            backAction(){
               this.$emit("backAction"); 
            },
            nextAction(){
               this.$emit("nextAction"); 
            },
            nextActionConfirmed(){
               this.$emit("nextActionConfirmed"); 
            },
            backActionConfirmed(){
               this.$emit("backActionConfirmed"); 
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

.col1 {
    width:40%;
    height:200px;
    border: 2px solid transparent;
    overflow: hidden;
}

.col2 {
    width:60%;
    height:200px;
}

.col1 img {
    width:100%;
    height:100%;
    object-fit: contain;
}

.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
  border: 1px solid #ddd;
}

.pagination a.active {
  background-color: #4CAF50;
  color: white;
  border: 1px solid #4CAF50;
}

.pagination a:hover:not(.active) {background-color: #ddd;}
</style>
