import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const albumsService = {
    getAll: () => apiService.get(urls.albums)
}
export  {
    albumsService
}