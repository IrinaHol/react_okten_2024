import {useEffect, useState} from "react";
import {userService} from "../../services/userService";
import {UserForm} from "./UserForm";
import {Users} from "./Users";

const UserContainer = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAll().then(({data})=> setUsers(data))
    }, []);

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {UserContainer};