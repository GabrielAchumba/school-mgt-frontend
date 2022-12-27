import { get } from "../../../store/modules/gcp-services"

export const loadCAQuestions = async (schoolId) => {

    var url = `caquestion/files/${schoolId}`;
    var response = await get({
    url
    })


    return { result: response.data, message: "" }

}