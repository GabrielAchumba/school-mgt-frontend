import { get } from "../../../../store/modules/gcp-services"

export const loadMissions = async (schoolId) => {

    var url = `mission/files/${schoolId}`;
    var response = await get({
    url
    })


    return { result: response.data, message: "" }

}