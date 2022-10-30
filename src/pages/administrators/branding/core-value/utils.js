import { get } from "../../../../store/modules/gcp-services"

export const loadCoreValues = async (schoolId) => {

    var url = `corevalue/files/${schoolId}`;
    var response = await get({
    url
    })


    return { result: response.data, message: "" }

}