<template>
    <div> 
        <div 
        v-if="setIsResponsive"
        class="row q-pa-sm">
            <!-- <q-space /> -->
            <div class="col-12 text-center q-pa-sm">
            <q-btn class="q-ma-sm bg-accent text-primary"
            style="width:95%"
            v-for="qBtn in qBtns" 
            :key="qBtn.label"
            :label="qBtn.label"
            :disabled="qBtn.btnDisabled"
            type="button"
            no-caps
            @click="ClickAction(qBtn.name)"
            />
            </div>
        </div>
        <div 
        v-else
        class="row q-pa-sm">
            <q-space />
            <div class="text-right">
            <q-btn class="q-ma-sm bg-accent text-primary"
            v-for="qBtn in qBtns" 
            :key="qBtn.label"
            :label="qBtn.label"
            :disabled="qBtn.btnDisabled"
            type="button"
            size="md"
            no-caps
            @click="ClickAction(qBtn.name)"
            />
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props:{
        qBtns:{
            type: Array,
            default: [
                {
                    label: "Mobile App",
                    btnDisabled: false,
                },
                {
                    label: "Login/Register",
                    btnDisabled: false,
                }
            ]
        }
    },
    computed:{
        setIsResponsive(){
            const width = window.innerWidth;
            if(width < 700) return true;
            else return false;
        },
    },
    methods:{
          ClickAction(actionName){
              var context = this;
              this.$emit(actionName);
          },
    }
}
</script>
