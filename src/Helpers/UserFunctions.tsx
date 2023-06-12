export const isLoggedIn = () => {
    try {
        if (localStorage.getItem("token") === null || localStorage.getItem("token") === undefined || JSON.parse(localStorage.getItem("loggedin") || "") === "0"){
            return false
        }
        else
            return true
    }catch(error) {
        return false
    }
}

export const getToken = () => {
    try{

        return JSON.parse(localStorage.getItem("token") || "")
    } catch {
        return ""
    }
}

export const getRequester = () => {
    return localStorage.getItem("requester")
}

export const getUserFullName = () => {
    return localStorage.getItem("user-name") || ""
}

export const getRoleId = () => {
    return JSON.parse(localStorage.getItem("role_id")|| "") 
}