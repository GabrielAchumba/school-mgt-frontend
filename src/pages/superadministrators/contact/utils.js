import { get } from "../../../store/modules/gcp-services"

export const loadContacts = async (schoolId) => {

    var url = `contact/files/${schoolId}`;
    var response = await get({
    url
    })

    return { result: response.data, message: "" }

}