import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    const {nameEpisode} = useSelector(state => state.episodes);
    const {pathname} = useLocation();

    return (
        <div className={css.Header}>
            {pathname === '/episodes' ? <h1>Rick & Morty</h1> : <h1>{nameEpisode}</h1>}
        </div>
    );
};

export {Header};