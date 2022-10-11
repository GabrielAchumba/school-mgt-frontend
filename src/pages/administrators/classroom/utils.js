import { get } from "../../../store/modules/services"

export const loadClassRooms = async (schoolId) => {

    var url = `classroom/${schoolId}`;
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