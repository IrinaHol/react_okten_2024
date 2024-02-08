import {useForm} from "react-hook-form";
import {commentService} from "../../services/commentService";

const CommentForm = ({setComments}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm();

    const saveComment = async (comment) => {
        console.log(comment)
        const {data} = await commentService.create(comment)
        setComments(prev => [...prev, data])
        reset()

    };
    return (
        <div>
            <form onSubmit={handleSubmit(saveComment)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <input type="text" placeholder={'body'} {...register('body')}/>
                <button>Save</button>
            </form>
            {errors.name && <div>{errors.name.message}</div>}
            {errors.email && <div>{errors.email.message}</div>}
            {errors.body && <div>{errors.body.message}</div>}
        </div>
    );
};

export {CommentForm};