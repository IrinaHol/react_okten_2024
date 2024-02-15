import {Outlet} from "react-router-dom";

import {Users} from "../components/UsersContainer/Users";

const UsersPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <Users/>
        </div>
    );
};

export {UsersPage};