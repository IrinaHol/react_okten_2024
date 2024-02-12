import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const todosService = {
    getAll: () => apiService.get(urls.todos),
}

export {
    todosService
}