import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const commentsService = {
    getByPostId: (postId) => apiService.get(urls.comments, {params: {postId}})
}

export {
    commentsService
}