import {PostDetails} from "../components/PostContainer/PostDetails";
import {useEffect, useState} from "react";
import {postService} from "../services/postsService";
import {useParams} from "react-router-dom";

const PostDetailsPage = () => {
    const {postId} = useParams();
    const [postDetails, setPostDetails] = useState([])

    useEffect(() => {
        postService.getById(postId).then(({data}) => setPostDetails(data))
    }, [postId]);

    return (
        <div>
            <PostDetails postDetails={postDetails}/>
        </div>
    );
};

export {PostDetailsPage};