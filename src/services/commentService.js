import {apiService} from "./apiService";
import {urls} from "../constants/urls";


const commentService = {
    getAll: () => apiService(urls.comments),
    create: (comment) => apiService.post(urls.comments, comment)
}

export {
    commentService
}