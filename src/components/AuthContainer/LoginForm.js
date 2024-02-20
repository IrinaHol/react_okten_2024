import {useForm} from "react-hook-form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {authService} from "../../services";

const LoginForm = () => {
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const login = async (user) => {
        try {
            await authService.login(user)
            navigate('/cars')

        } catch (e) {
            setError(true)
        }

    }
    return (
            <form onSubmit={handleSubmit(login)}>
                {error && <div>username or password incorrect</div>}
                <div>Username:<input type="text" {...register('username')}/></div>
                <div>Password<input type="text" {...register('password')}/></div>
                <button>login</button>
            </form>
    );
};

export {LoginForm};