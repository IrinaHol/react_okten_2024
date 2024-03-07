import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CharactersPage, EpisodesPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'episodes'}/>},
            {path: 'episodes', element: <EpisodesPage/>},
            {path: 'characters/:id', element: <CharactersPage/>}
        ]
    }
]);

export {
    router
}
