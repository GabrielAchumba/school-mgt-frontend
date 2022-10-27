import { get } from "../../../store/modules/gcp-services"

export const loadFileModels = async (schoolId) => {

    var url = `filemanagement/files/${schoolId}`;
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