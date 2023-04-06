import { API, endpoints } from "../api"

class UserService {
    static createUser(user) {
        return API.post(endpoints.api.users.create, user)
    }
    static updateUser(id, user) {
        return API.post(endpoints.api.users.update + id, user)
    }
    static fetchOneUser(id) {
        return API.get(endpoints.api.users.fetchOneUser + id)
    }
}
export default UserService;