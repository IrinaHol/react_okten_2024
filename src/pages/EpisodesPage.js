import {Outlet} from "react-router-dom";

import {Episodes} from "../components";

const EpisodesPage = () => {
    return (
        <div>
            <Outlet/>
            <Episodes/>
        </div>
    );
};

export {EpisodesPage};