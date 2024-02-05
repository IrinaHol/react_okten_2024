import css from './Post.module.css';

const Post = ({item, getCurrentPost}) => {
    const {id, title} = item;

    return (
        <div>
            <div>ID: {id}</div>
            <div>TITLE: {title}</div>

            <button className={css.Btn} onClick={()=>getCurrentPost(item)}>PostDetails</button>
        </div>
    );
};

export {Post};