import axios from "axios";
import endpoints from "./endpoints";
import AuthService from "../services/AuthService";
const API = axios.create({
    baseURL: endpoints.serverBaseUrl + "/api/v1"
})

API.interceptors.request.use((req) => {
    const aToken = sessionStorage.getItem("access")
    console.log("aToken", aToken)
    if (aToken && req.headers) {

        req.headers["authorization"] = aToken
    }
    return req
})
API.interceptors.response.use((res) => {
    console.log("response intercepters", res)
    return res;
},
    async (res) => {
        if (res?.error?.status == 403) {
            const resp = await AuthService.refreshToken()
            if (resp?.data?.data) {
                const { accessT, refreshT } = resp?.data?.data
                sessionStorage.clear()
                sessionStorage.setItem("access", accessT)
                sessionStorage.setItem("refresh", refreshT)

            }
            else sessionStorage.clear()
            window.location.href = "/login"
        }

        else {
            return Promise.reject(res);
        }


    }




)

export default API;