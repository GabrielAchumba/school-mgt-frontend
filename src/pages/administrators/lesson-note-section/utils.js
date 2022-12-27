import { get } from "../../../store/modules/gcp-services"

export const loadLessonNoteSections = async (schoolId) => {

    var url = `lessonnotesection/files/${schoolId}`;
    var response = await get({
    url
    })


    return { result: response.data, message: "" }

}