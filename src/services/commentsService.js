import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const commentsService = {
    getAll: () => apiService.get(urls.comments)
}

export {
    commentsService
}