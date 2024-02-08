const Comment = ({comment}) => {
    const {name, email, body} = comment;

    return (
        <div>
            <div>
                <div>name: {name}</div>
                <div>email: {email}</div>
                <div>body: {body}</div>
            </div>
        </div>
    );
};

export {Comment};