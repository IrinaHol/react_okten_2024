import {useForm} from "react-hook-form";
import {userService} from "../../services/userService";
const UserForm = ({setUsers}) => {
    const {reset, handleSubmit, register} = useForm();

    const saveUser = async (user) => {
        const {data} = await userService.create(user);
        setUsers(prev=> [...prev, data])
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(saveUser)}>
                <input type="text" placeholder={'name'} {...register('name')} />
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <button>Save User</button>
            </form>
        </div>
    );
};

export {UserForm};