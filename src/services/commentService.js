import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";


const commentService = {
    getAll: () => axiosService(urls.comments),
    create: (comment) => axiosService.post(urls.comments, comment)
}

export {
    commentService
}