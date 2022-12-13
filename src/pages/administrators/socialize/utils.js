import { get } from "../../../store/modules/gcp-services"

export const loadStories = async (schoolId) => {

    var url = `story/files/${schoolId}`;
    var response = await get({
    url
    })


    return { result: response.data, message: "" }

}