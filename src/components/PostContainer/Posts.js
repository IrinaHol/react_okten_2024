import {useEffect, useState} from "react";
import {postService} from "../../services/postsService";
import {useLocation} from "react-router-dom";
import {Post} from "./Post";

const Posts = () => {

    const {state} = useLocation();

    const [post, setPost] = useState(null)

    useEffect(() => {
        postService.getById(state).then(({data}) => {
            setPost(data)
        })
    }, [state]);

    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {Posts};