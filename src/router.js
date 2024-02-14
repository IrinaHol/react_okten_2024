import {createBrowserRouter} from "react-router-dom";

import {TodosPage} from "./pages/TodosPage";
import {MainLayout} from "./layouts/MainLayout";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {ErrorPage} from "./pages/ErrorPage";
import {PostPage} from "./pages/PostPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {index: true, element: <AlbumsPage/>},
            {path: 'todos', element: <TodosPage/>},
            {path: 'albums', element: <AlbumsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'comments', element: <CommentsPage/>, children: [
                    {path: 'post', element: <PostPage/>}
                ]
            }
        ]
    }
])

export {
    router
}