import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const usersService = {
    getAll: () => apiService.get(urls.users.base),
    getById: (id) =>apiService.get(urls.users.byId(id))
}
export  {
    usersService
}