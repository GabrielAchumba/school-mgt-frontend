import { get } from "../../../store/modules/services";

export const loadSessions = async (schoolId) => {

    var url = `session/${schoolId}`;
    var response = await get({
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