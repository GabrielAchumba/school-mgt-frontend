import { get } from "../../../../store/modules/gcp-services"

export const loadNewses = async (schoolId) => {

    var url = `news/files/${schoolId}`;
    var response = await get({
    url
    })


    return { result: response.data, message: "" }

}