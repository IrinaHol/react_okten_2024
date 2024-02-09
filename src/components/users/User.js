const User = ({user}) => {

    const {id, name, username, email} = user;

    return (
        <div style={{border: '1px green solid'}}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
        </div>
    );
};

export {User};