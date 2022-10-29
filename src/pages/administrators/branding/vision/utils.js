import { get } from "../../../../store/modules/gcp-services"

export const loadVisions = async (schoolId) => {

    var url = `vision/files/${schoolId}`;
    var response = await get({
    url
    })


    return { result: response.data, message: "" }

}