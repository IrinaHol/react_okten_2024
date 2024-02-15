import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user;
const navigate = useNavigate();
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={() => navigate(id.toString(), {state: {user}})}>details</button>
        </div>
    );
};

export {User};