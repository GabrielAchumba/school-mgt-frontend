import { get } from "../../../store/modules/services"

export const loadPendingPayments = async (schoolId) => {

    var url = `payment/pending-payments`;
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