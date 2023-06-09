import { endpoints, API } from "../api"

class AuthService {
    static userLogin(user) {
        return API.post(endpoints.api.auth.userLogin, user).then((response) => {
            const accessToken = response.headers["x-access-token"];
            const refreshToken = response.headers["x-refresh-token"];
            sessionStorage.setItem("refresh", refreshToken);
            sessionStorage.setItem("access", accessToken);
            return response;
        });
    }
    static validateToken() {
        return API.post(endpoints.api.auth.validateToken, {})
    }
    static refreshToken() {
        const refresh = sessionStorage.getItem("refresh")
        if (!refresh) return Promise.reject("Refresh token not available")
        return API.post(endpoints.api.auth.refreshToken, { refresh })
    }
}
export default AuthService;