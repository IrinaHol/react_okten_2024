import {useEffect, useState} from "react";
import {Post} from "../Post/Post";
import {postServices} from "../../services/postServices";
import {PostDetails} from "../PostDetails/PostDetails";
import css from './Posts.module.css';

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        postServices.getAll()
            .then(({data}) => setPosts(data))
    }, []);

    const getCurrentPost = (user) => {
        setPostDetails(user);
    }
    return (
        <div className={css.Posts}>
            <div className={css.PostsInfo}>{posts.map(post => <Post item={post} key={post.id} getCurrentPost={getCurrentPost}/>)}</div>
            <div className={css.PostsDetails}>{postDetails && <PostDetails postDetails={postDetails}/>}</div>
        </div>
    );
};

export {Posts};