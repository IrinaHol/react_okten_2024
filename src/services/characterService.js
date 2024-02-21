import {apiService} from "./apiService";
import {urls} from "../constants";

const characterService = {
    getById: (id) => apiService.get(urls.character.byId(id))
}

export {
    characterService
}