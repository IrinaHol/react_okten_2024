const Todo = ({todo}) => {
    const {userId, id, title, completed} = todo;
    
    return (
        <div>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>completed:{completed.toString()}</div>
        </div>
    );
};

export {Todo};