import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from './Episode.module.css'
import {episodesActions} from "../../redux";


const Episode = ({item}) => {
    const {id, name, episode, characters} = item;
    const dispatch = useDispatch()
    const navigate = useNavigate();


    const toCharacters = () => {
        const newId = characters.map(character => character.split('/').slice(-1)[0]).join(',');
        dispatch(episodesActions.setNameEpisode(name));
        navigate(`/characters/${newId}`)
    };
    return (
        <div className={css.boxEpisode}>
            <div onClick={toCharacters}>
                <div>id:{id}</div>
                <div>name:{name}</div>
                <div>episode:{episode}</div>
            </div>
        </div>
    );
};

export {Episode};