import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {postService} from "../../services/postsService";
import {Post} from "./Post";

const Posts = () => {
    const {userId} = useParams();
    const [posts, setPosts] = useState([])


    useEffect(() => {
        postService.getByUserId(userId).then(({data}) => setPosts(data))
    }, [userId])

    return (
        <div>
            <h2>Post of user {userId}</h2>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>
    );
};

export {Posts};