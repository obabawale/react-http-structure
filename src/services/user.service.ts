import http from "../modules/http";

type User = { 
    email: string, 
    password: string, 
    firstname: string | null, 
    lastname: string | null,  
    age: number | null,
}

const USER_API_ENDPOINT = "/users"

const getAllUsers = () => {
    return http.get(USER_API_ENDPOINT).then((response) => {
        return response.data;
    })
}

const getUser = (id: number) => {
    return http.get(USER_API_ENDPOINT + "?id=" + id).then((response) => {
        return response.data;
    })
}

const deleteUser = (id: number) => {
    return http.delete(USER_API_ENDPOINT + "/" + id).then((response) => {
        return response.data;
    })
}

const updateUser = (id: number, user: User) => {
    return http.put(USER_API_ENDPOINT + "/" + String(id), user).then((response) => {
        return response.data;
    })
}

const postUser = (user: User) => {
    return http.post(USER_API_ENDPOINT, user).then((response) => {
        return response.data;
    })
}

const UserService = {
    getAllUsers,
    getUser,
    postUser,
    deleteUser,
    updateUser,
}

export default UserService;