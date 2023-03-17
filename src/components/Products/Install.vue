<template>
    <div class="q-pa-md"> 
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
            <div class="text-left">
            <q-btn class="q-ma-sm qa-pa-sm bg-accent text-primary"
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
            <q-space />
        </div>
    </div>
</template>

<script>

export default {
    props:{
        qBtns:{
            type: Array,
            default: () => {
                return [
                    {
                        label: "Mobile App",
                        btnDisabled: false,
                        name: "installApp",
                    },
                    {
                        label: "Login/Register",
                        btnDisabled: false,
                        name: "login",
                    }
                ]
            }
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
              this.$emit(actionName);
          },
    }
}
</script>
