<template>
  <div>
    <TitleDescriptionImages
    :infos="landsCardList"
    :filterModel="filterModel"
    @next="next"
    @back="back"
    @filterLands="filterLands"
    @paginationAction="paginationAction"
    @createInfo="createInfo"/>
    <div 
      v-show="showSpinner"
      class="q-gutter-md row">
        <div class="col-12 q-pa-sm absolute-center flex flex-center">
            <q-spinner
                color="accent"
                :size="spinnerSize"
                :thickness="spinnerThickness"
            />
        </div>
    </div>
  </div>
</template>

<script>
import TitleDescriptionImages from "../../../components/Common/title-description-images.vue"
import { get, remove } from "../../../store/modules/services"
import { loadPaginatedLands } from "./utils";
export default {
    computed:{
        showSpinner(){
        return this.$store.getters["authenticationStore/showSpinner"];
    },
    spinnerSize(){
        return this.$store.getters["authenticationStore/spinnerSize"];
    },
    spinnerThickness(){
        return this.$store.getters["authenticationStore/spinnerThickness"];
    }
    },
    components:{
    TitleDescriptionImages,
    },
data () {
    return {
            dialogs:[
                { title: "Delete Land", isVisible: false, message: "Do you want to delete an land",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Lannd deleted successfully!",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Failure", isVisible: false, message: "",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
            ],
            pages: [],
            mobileAppStepper: 7,
            webAppStepper: 25,
            limit: 0,
            fileModel: "",
            page: 1,
            totalNumberOfLands: 0,
            paginatedLands: [],
            landsCardList: [],
        }
    },
    methods: {
        async filterLands(filter){
            var context = this;
            if(filter === "") filter = "@";
            await context._loadPaginatedLands(1, filter);
            
        },
        async paginationAction(payload){
            var context = this;
            context.page = payload.page.sn;
            const filter = payload.filter;
            await context._loadPaginatedLands(context.page, filter);
        },
        async next(payload){
            var context = this;
            let counter =  context.pages[0].sn;
            const firstSN = context.pages[0].sn;
            let counter2 = 0;
            context.pages = [];
            for(let j = (firstSN * context.limit); j < context.totalNumberOfLands; j=j+context.limit){
                counter++;
                counter2++;
                if(context.isMobile){
                    if(counter2 > context.mobileAppStepper) break;
                }else{
                    if(counter2 > context.webAppStepper) break;
                }
                context.pages.push({
                    sn: counter,
                    isActive: false
                })
            }
            context.pages[0].isActive = true;
            if(payload.filter === "") payload.filter = "@"
            context.form.fileModel = payload.filter;
            await context._loadUpdatedPaginatedLands(context.pages[0], payload.filter);
        },
        async back(payload){

            var context = this;
            let counter = context.pages[0].sn - 2;
            if(counter < 1) counter = 0;
            let counter2 = 0;
            const lent = context.pages.length;
            const lastSN = context.pages[lent-1].sn;
            const firstSN = context.pages[0].sn - 1;
            context.pages = [];
            for(let j = (firstSN * context.limit); j < (lastSN * context.limit); j=j+context.limit){
                counter++;
                counter2++;
                if(context.isMobile){
                    if(counter2 > context.mobileAppStepper) break;
                }else{
                    if(counter2 > context.webAppStepper) break;
                }
                context.pages.push({
                    sn: counter,
                    isActive: false,
                })
            }
            context.pages[0].isActive = true;
            if(payload.filter === "") payload.filter = "@"
            context.fileModel = payload.filter;
            await context._loadUpdatedPaginatedLands(context.pages[0], payload.filter);
        },
        async _loadUpdatedPaginatedLands(page, filter){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            this.$store.commit("authenticationStore/setShowSpinner", true);
            context.page = page.sn;
            if(filter === "" || filter === undefined) filter = "@"
            const { result, message } = await loadPaginatedLands(user.schoolId, context.page, filter);
            const { paginatedLands } = result
            this.$store.commit("authenticationStore/setShowSpinner", false);
            context.paginatedLands = [...paginatedLands];

            context.landsCardList = context.paginatedLands.map((row, i) => {
                return {
                    sn: i+1,
                    ...row,
                    title: `${row.title}  ${row.wholePlot}${row.fractionPlot} Plot(s)`,
                }
            })

        },
        async _loadPaginatedLands(selectedPage, filter){
            var context = this;
            if(filter === "" || filter === undefined) filter = "@"
            this.$store.commit("authenticationStore/setShowSpinner", true);
            const { result, message } = await loadPaginatedLands(selectedPage, filter);
            const { paginatedLands, totalNumberOfLands, limit } = result
            this.$store.commit("authenticationStore/setShowSpinner", false);
            let counter = 0;
            context.pages = [];
            context.totalNumberOfLands = totalNumberOfLands;
            context.limit = limit;
            let isActive = false;
            for(let j = 0; j < totalNumberOfLands; j=j+limit){
                counter++;
                if(context.isMobile){
                    if(counter > context.mobileAppStepper) break;
                }else{
                    if(counter > context.webAppStepper) break;
                }
                if(counter === selectedPage) isActive = true
                else isActive = false;
                context.pages.push({
                    sn: counter,
                    isActive,
                })
            }

            context.paginatedLands = [...paginatedLands];
            context.landsCardList = context.paginatedLands.map((row, i) => {
                return {
                    sn: i+1,
                    ...row,
                    title: `${row.title}  ${row.wholePlot}${row.fractionPlot} Plot(s)`,
                }
            })

        },
        createInfo(){
            this.$router.push('/create-land')
        },
        updateInfoAction(payload){
            this.$store.commit("authenticationStore/setSelectedLand", payload)
        },
        deleteInfoAction(payload){

        },
        setBackRoute(){
                let backRoute= "/vendor";
                this.$store.commit("authenticationStore/setBackRoute", backRoute);
        }
    },
    async created() {
        var context = this;
        context.form.fileModel = "@";
        await context._loadPaginatedLands(1, context.fileModel);
        this.$store.commit("authenticationStore/setActiveRoute", "lands");
        this.$store.commit("authenticationStore/setIsError", false);
        this.$store.commit("authenticationStore/setErrorMessages", "");
        context.setBackRoute();
        this.$store.commit("authenticationStore/setPageTitle", "Lands");  
    }
}
</script>