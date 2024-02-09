const Comment = ({comment}) => {
    const {id, name, email, body} = comment;

    return (
        <div style={{border: '1px red solid'}}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Comment};