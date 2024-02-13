import {useEffect, useState} from "react";

import {commentsService} from "../../services/commentsService";
import {Comment} from "./Comment";

const Comments = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data))
    }, []);
    return (
        <div>
            <h2>Comments</h2>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};