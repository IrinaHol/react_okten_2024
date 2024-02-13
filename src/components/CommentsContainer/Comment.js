import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <Link to={'post'} state={postId}>
                <div>body:{body}</div>
            </Link>
        </div>
    );
};

export {Comment};