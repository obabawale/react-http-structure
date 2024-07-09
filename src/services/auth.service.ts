import http from "../modules/http";
import { loginCredentials } from "../App.types";

const LOGIN_ENDPOINT = "/login"
const LOGOUT_ENDPOINT = "/logout"

const login = async({email, password}: loginCredentials) => {
    return await http.post(LOGIN_ENDPOINT, {email, password}).then((response) => {
            if(response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        } 
    )
}

const logout = () => {
    return http.post(LOGOUT_ENDPOINT);
}

const AuthService = {
    login,
    logout
}

export default AuthService;