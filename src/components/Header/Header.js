import {useSelector} from "react-redux";

import css from './Header.module.css'
const Header = () => {
    const {nameEpisode} = useSelector(state => state.episodes);

    return (
        <div className={css.Header}>

            {
                nameEpisode ?
                    <h1>{nameEpisode}</h1>
                    :
                    <h1>Rick & Morty</h1>
            }
        </div>
    );
};

export {Header};