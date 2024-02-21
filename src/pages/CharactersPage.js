import {useNavigate} from "react-router-dom";

import {Characters} from "../components";
import css from './Pages.module.css'

const CharactersPage = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate(-1)
    }

    return (
        <div className={css.CharactersPage}>
            <button onClick={back}>back</button>
            <Characters/>
        </div>
    );
};

export {CharactersPage};