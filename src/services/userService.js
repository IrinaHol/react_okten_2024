import {apiService} from "./apiService";
import {urls} from "../constants/urls";


const userService = {
    getAll: () => apiService(urls.users),
    create: (user) => apiService.post(urls.users, user)
}

export {
    userService
}