import { get } from "../../../../store/modules/gcp-services"

export const loadCarousels = async (schoolId) => {

    var url = `carousel/files/${schoolId}`;
    var response = await get({
    url
    })


    return { result: response.data, message: "" }

}