import { get } from "../../../../store/modules/gcp-services"

export const loadLogos = async (schoolId) => {

    var url = `logo/files/${schoolId}`;
    var response = await get({
    url
    })


    return { result: response.data, message: "" }

}