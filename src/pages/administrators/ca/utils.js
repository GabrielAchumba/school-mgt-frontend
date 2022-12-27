import { get } from "../../../store/modules/services"

export const loadLessonNotes = async (schoolId) => {

    var url = `lessonnote/${schoolId}`;
    var response = await get({
    url
    })

    const { 
        data : {
            data: result,
            success,
            message,
        }
    } = response


    if(success){
        return { result, message: "" }
    }else{
        return { result: [], message }
    }

}

export const splitAssessment = (assessment) => {
    let textArray = assessment.split("(")
    const assessmentName = textArray[0].trim();
    const term2 = textArray[1];
    textArray = term2.split(")")
    const subjectName = textArray[0];
    return { assessmentName, subjectName };
}