import {NavLink} from "react-router-dom";
import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <div><h1>Cars</h1></div>
            <div>
                <NavLink to={'login'}>login</NavLink>
                <NavLink to={'register'}>register</NavLink>
            </div>
        </div>

    );
};

export {Header};