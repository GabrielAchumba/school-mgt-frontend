import { get } from "../../../store/modules/gcp-services"

export const loadFileModels = async (schoolId) => {

    var url = `filemanagement/files/${schoolId}`;
    var response = await get({
    url
    })


    return { result: response.data, message: "" }

}