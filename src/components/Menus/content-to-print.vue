<template>
    <div class="q-pa-sm">
        <div class="row">
<!--              <AssessmentLanding 
             class="col-12"
            v-if="activeRoute=='/assessment-landing'"/>
            <ClassroomLanding 
             class="col-12"
            v-if="activeRoute=='/classroom-landing'"/>
            <ResultsLanding 
             class="col-12"
            v-if="activeRoute=='/results'"/>
             <StudentResultsLanding 
             class="col-12"
            v-if="activeRoute=='/student-results'"/>
            <StaffLanding 
             class="col-12"
            v-if="activeRoute=='/staff-landing'"/>
            <StudentLanding 
             class="col-12"
            v-if="activeRoute=='/student-landing'"/>
            <SubjectLanding 
             class="col-12"
            v-if="activeRoute=='/subject-landing'"/>
            <UserLanding 
             class="col-12"
            v-if="activeRoute=='/user-landing'"/>
            <StudentsPositions 
             class="col-12"
            v-if="activeRoute=='/students-positions-analysis'"/>
            <StudentStudentsPositions 
             class="col-12"
            v-if="activeRoute=='/student-students-positions-analysis'"/>
            <SummariedResults 
             class="col-12"
            v-if="activeRoute=='/single-student-results-analysis'"/>
             <StudentSummariedResults 
             class="col-12"
            v-if="activeRoute=='/student-single-student-results-analysis'"/>
            <Invoice 
             class="col-12"
            v-if="activeRoute=='/create-subscription'"/>
            <Invoice 
             class="col-12"
            v-if="activeRoute=='/update-subscription'"/> -->
        </div>
    </div>
</template>

<script>
/* import AssessmentLanding from "../../pages/administrators/assessment/landing.vue";
import ClassroomLanding from "../../pages/administrators/classroom/landing.vue";
import ResultsLanding from "../../pages/administrators/result/results.vue";
import StudentResultsLanding from "../../pages/administrators/result/student-results.vue";
import StaffLanding from "../../pages/administrators/staff/landing.vue";
import StudentLanding from "../../pages/administrators/student/landing.vue";
import SubjectLanding from "../../pages/administrators/subject/landing.vue";
import UserLanding from "../../pages/administrators/user/landing.vue";
import StudentsPositions from "../../pages/administrators/result/analysis/StudentsPositions.vue";
import SummariedResults from "../../pages/administrators/result/analysis/SummariedResults.vue";
import StudentStudentsPositions from "../../pages/administrators/result/student-analysis/StudentsPositions.vue";
import StudentSummariedResults from "../../pages/administrators/result/student-analysis/SummariedResults.vue";
import Invoice from "../../pages/administrators/subscription/invoice.vue"; */
import { printableRoutes } from "./printable-routes";


export default {
    computed:{
        activeRoute(){
            const activeRoute = this.$store.getters["authenticationStore/activeRoute"];
            return  printableRoutes[activeRoute].route;
        }
    },
    components:{
        /* AssessmentLanding,
        ClassroomLanding,
        ResultsLanding,
        StudentResultsLanding,
        StaffLanding,
        StudentLanding,
        SubjectLanding,
        UserLanding,
        StudentsPositions,
        StudentStudentsPositions,
        SummariedResults,
        StudentSummariedResults,
        Invoice, */
    }

}
</script>