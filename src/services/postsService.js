import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const postService = {
    getByUserId: (userId) => apiService.get(urls.posts.base, {params: {userId}}),
    getById: (id) => apiService.get(urls.posts.byId(id))
}

export {
    postService
}