import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";


const userService = {
    getAll: () => axiosService(urls.users),
    create: (user) => axiosService.post(urls.users, user)
}

export {
    userService
}