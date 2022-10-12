import { post } from "../../../store/modules/services";

export const loadSubjects = async (schoolId) => {

    var url = `subject/${schoolId}`;
    var response = await post({
    url
    })

    const { 
        data : {
            data: result,
            success,
            message,
        }
    } = response


    if(success){
        return { result, message: "" }
    }else{
        return { result: [], message }
    }
}