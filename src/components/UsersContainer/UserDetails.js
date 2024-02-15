import {useNavigate} from "react-router-dom";

const UserDetails = ({userDetails}) => {
    const {id, name, username, email, phone, website, address: {street}} = userDetails;

    const navigate = useNavigate();
    return (
        <div>
            <h2>User {id}</h2>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <div>email:{email}</div>
            <div>phone:{phone}</div>
            <div>website:{website}</div>
            <div>street:{street}</div>
            <button onClick={()=>navigate('posts')}>PostOfCurrentUser</button>
        </div>
    );
};

export {UserDetails};