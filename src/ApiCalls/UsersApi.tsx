import { getAPICall, postAPICall, URL } from "./CommonApi"
import User from "../Types/User"
import { getRequester, getToken } from "../Helpers/UserFunctions"

var token = getToken()
var requester = getRequester()

export const getUsers = async(user_id?:string, token2?:string)=>{
    // URL+"users/get?requester="+requester+"&token=".concat("",token)+"&user_id="
    console.log(token)
    if (user_id == undefined)
        user_id = ""

    try {
        const response = await getAPICall(URL+"users/get?requester="+requester+"&token="+token+"&user_id=" + user_id,{
        })
        return { data: response.data};
    } catch (error) {
        return { data: error };
    }
}

export const createUser = async(user:User)=>{
    try {
        const response = await postAPICall(URL+"users/create", {
            requester: requester,
            token: token,
            first_name: user.first_name,
            middle_name: user.middle_name,
            last_name: user.last_name,
            role_id: user.role_id,
            contact_no: user.contact_no,
            address: user.address,
            username: user.username,
            password: user.password,
        })
        return { data: response.data};
    } catch (error) {
        return { data: error };
    }
}

export const updateUser = async(user:User)=>{
    try {
        const response = await postAPICall(URL+"users/update/"+String(user.id), {
            requester: requester,
            token: token,
            first_name: user.first_name,
            middle_name: user.middle_name,
            last_name: user.last_name,
            role_id: 1,
            contact_no: user.contact_no,
            address: user.address,
            username: user.username,
            password: user.password,
        })
        return { data: response.data};
    } catch (error) {
        return { data: error };
    }
}

export const deleteUser = async(user_id:string) => {
    try {
        const response = await postAPICall(URL+"users/delete/"+String(user_id), {
            requester: requester,
            token: token,
        })
        return { data: response.data};
    } catch (error) {
        return { data: error };
    }
}