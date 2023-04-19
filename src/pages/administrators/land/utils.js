import { get } from "../../../store/modules/services"

export const loadPaginatedLands = async (page, filter) => {

    var url = `land/${page}/${filter}`;
    console.log("url: ", url)
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
        return { result: {
            paginatedLands: [],
            totalNumberOfLands: 0,
            limit: 0,
        }, message }
    }
}
