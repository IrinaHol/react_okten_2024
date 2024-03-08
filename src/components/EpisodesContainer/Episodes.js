import {useEffect, } from "react";
import {useDispatch, useSelector} from 'react-redux';

import {Episode} from "./Episode";
import css from "./Episode.module.css";
import {usePageQuery} from "../../hooks";
import {episodesActions} from "../../redux";


const Episodes = () => {
    const {episodes: {info, results}, loading} = useSelector(state => state.episodes);
    const dispatch = useDispatch();

    const {page, prevPage, nextPage} = usePageQuery()

    useEffect(() => {
        dispatch(episodesActions.getAllEpisodes({page}))
    }, [page, dispatch]);

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            <div className={css.Block}>
                {results?.map(episode => <Episode key={episode.id} item={episode}/>)}
            </div>
            <div className={css.btn}>
                <button disabled={!info?.prev} onClick={prevPage}>prevPage</button>
                <button disabled={!info?.next} onClick={nextPage}>nextPage</button>
            </div>
        </div>
    );
}

export {Episodes};