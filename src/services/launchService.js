import {axiosService} from "./axiosService";
import {baseURL} from "../constants/urls";

const launchServices = {
    getAll: () => axiosService(baseURL),
}

export {
    launchServices
}