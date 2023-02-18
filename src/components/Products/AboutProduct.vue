<template>
    <div class="q-pa-sm">
        <TitleDescription
            :title="title"
            :description="description"/>
    </div>
</template>

<script>
import TitleDescription from "../Common/title-description2.vue";
export default {
    components:{
        TitleDescription,
    },
    props:{
        title: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default:  `<h5 style="text-align: left;">
                            <span>
                                <b>
                                    About this app
                                </b>
                            </span>
                        </h5>
                        <p style="text-align: left;">
                            Torpa is Newway Standard Global flagship software for digitization of school day to day activities. 
                            Presently it can be used in about two hundred and forty countries. Torap is a web and mobile app product 
                            and possesses cut-clear analytic presentation and diagrams for simple and complex results, 
                            and also allows sessional analysis at different class level, students, subjects, 
                            and others within the database of the school.The product can be used by any school 
                            ranging from pre-nursery school to high institution, including non-conventional training institutes.
                        </p>`,
        }
    }
}
</script>
