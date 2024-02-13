const Post = ({post}) => {
    
    const {userId, id, title, body} = post;
    
    return (
        <div>
            <h2>Post</h2>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    );
};

export {Post};