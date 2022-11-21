import { get } from "../../../store/modules/services";

export const loadExams = async (schoolId, subjectId, levelId) => {

    var url = `examquestion/${schoolId}/${subjectId}/${levelId}`;
    var response = await get({
    url
    })


    if(response.data){
        return { result:response.data, message: "" }
    }else{
        return { result: [], message: "Error fetching data" }
    }
}