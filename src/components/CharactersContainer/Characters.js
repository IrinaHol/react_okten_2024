import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Character} from "./Character";
import css from './Character.module.css'
import {charactersActions} from "../../redux";


const Characters = () => {
    const {characters, loading} = useSelector(state => state.characters);
    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch(charactersActions.getCharactersById({id}))
    }, [id, dispatch]);

    return (
        <div className={css.CharacterContainer}>
            {loading && <h1>Loading...</h1>}
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};