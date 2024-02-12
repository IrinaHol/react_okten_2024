import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const postService = {
    getById: (id) => apiService.get(urls.posts.byId(id))
}

export {
    postService
}