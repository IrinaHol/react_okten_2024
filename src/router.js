import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {ErrorPage} from "./pages/ErrorPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostPage} from "./pages/PostPage";
import {usersService} from "./services/usersService";
import {PostDetailsPage} from "./pages/PostDetailsPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {path: 'users', element: <UsersPage/>, loader: () => usersService.getAll(), children: []},
            {path: 'users/:userId', element: <UserDetailsPage/>, children: [
                    {path: 'posts', element: <PostPage/>},
                    {
                        path: 'posts/:postId',
                        element: <PostDetailsPage/>
                    }]},
        ]
    }
])

export {
    router
}