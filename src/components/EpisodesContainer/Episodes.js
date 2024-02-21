import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {episodeService} from "../../services";
import {Episode} from "./Episode";
import css from "./Episode.module.css";

const Episodes = () => {
    const [episodes, setEpisodes] = useState([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null})

    useEffect(() => {
        episodeService.getAll(query.get('page')).then(({data: {results, info}}) => {
            setEpisodes(results)
            setPrevNext({prev: info.prev, next: info.next})
        })
    }, [query.get('page')]);

    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())
            return prev
        })
    }

    const next = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
            return prev
        })
    }

    return (
        <div>
            <div className={css.Block}>
                {episodes.map(episode => <Episode key={episode.id} item={episode}/>)}
            </div>
            <div className={css.btn}>
                <button disabled={!prevNext.prev} onClick={prev}>prevPage</button>
                <button disabled={!prevNext.next} onClick={next}>nextPage</button>
            </div>
        </div>
    );
}

export {Episodes};