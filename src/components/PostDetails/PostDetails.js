const PostDetails = ({postDetails}) => {
    const {id, userId, title, body} = postDetails;
    return (
        <div>
            <div>ID: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};


export {PostDetails};