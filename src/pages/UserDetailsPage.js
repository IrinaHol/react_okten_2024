import {Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {usersService} from "../services/usersService";
import {UserDetails} from "../components/UsersContainer/UserDetails";

const UserDetailsPage = () => {
    const {userId} = useParams();
    const {state} = useLocation();

    const [userDetails, setUserDetails] = useState(null);
    useEffect(() => {
        if (state?.user) {
            setUserDetails(state.user)
        } else {
            usersService.getById(userId).then(({data}) => setUserDetails(data))
        }
    }, [userId, state?.user]);

    return (
        <div>
            {userDetails && <UserDetails userDetails={userDetails}/>}
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};