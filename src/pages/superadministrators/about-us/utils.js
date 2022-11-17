import { get } from "../../../store/modules/gcp-services"

export const loadAboutUses = async (schoolId) => {

    var url = `aboutus/files/${schoolId}`;
    var response = await get({
    url
    })


    return { result: response.data, message: "" }

}