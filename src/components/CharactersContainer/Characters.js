import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {Character} from "./Character";
import css from './Character.module.css'
import {characterService} from "../../services";

const Characters = () => {
    const {id} = useParams();

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        characterService.getById(id).then(({data}) => {
            setCharacters(data)
        })
    }, [id]);

    return (
        <div className={css.CharacterContainer}>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};