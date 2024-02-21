import {NavLink} from "react-router-dom";

import css from './Episode.module.css'

const Episode = ({item}) => {
    const {id, name, episode, characters} = item;

    const newId = characters.map(character => character.split('/').slice(-1)[0]).join(',');

    return (
        <div className={css.boxEpisode}>
            <NavLink to={`/character/${newId}`}>
                <div>id:{id}</div>
                <div>name:{name}</div>
                <div>episode:{episode}</div>
            </NavLink>

        </div>
    );
};

export {Episode};