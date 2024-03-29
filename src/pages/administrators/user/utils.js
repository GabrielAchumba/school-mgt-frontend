import { get } from "../../../store/modules/services";

export const loadUsers = async (schoolId) => {

    var url = `user/${schoolId}`;
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

export const loadPaginatedUsers = async (schoolId, page, filter) => {

    var url = `user/paginatedusers/${schoolId}/${page}/${filter}`;
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
            paginatedUsers: [],
            totalNumberOfUsers: 0,
            limit: 0,
        }, message }
    }
}



export const loadPaginatedConfirmedUsers = async (schoolId, page, filter) => {

    var url = `user/paginatedconfirmesusers/${schoolId}/${page}/${filter}`;
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
            paginatedUsers: [],
            totalNumberOfUsers: 0,
            limit: 0,
        }, message }
    }
}


export const loadUsersByCategory = async (category, schoolId) => {

    var url = `user/category/${category}/${schoolId}`;
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

export const loadUnComfirmedUsers = async (schoolId, filter) => {

    var url = `user/unconfirmedusers/${schoolId}/${filter}`;
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

export const loadReferals = async () => {

    var url = `user/referals`;
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