import {useEffect, useState} from "react";
// import {useSearchParams} from "react-router-dom";

import {episodeService} from "../../services";
import {Episode} from "./Episode";
import css from "./Episode.module.css";
import {usePageQuery} from "../../hooks";

const Episodes = () => {
    const [episodes, setEpisodes] = useState([])
    // const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null})
    const {page, prevPage, nextPage} = usePageQuery()
    console.log(page)

    useEffect(() => {
        episodeService.getAll(page).then(({data: {results, info}}) => {
            setEpisodes(results)
            setPrevNext({prev: info.prev, next: info.next})
        })
    }, [page]);


    // const prev = () => {
    //     setQuery(prev => {
    //         prev.set('page', (+prev.get('page') - 1).toString())
    //         return prev
    //     })
    // }

    // const next = () => {
    //     setQuery(prev => {
    //         prev.set('page', (+prev.get('page') + 1).toString())
    //         return prev
    //     })
    // }

    return (
        <div>
            <div className={css.Block}>
                {episodes.map(episode => <Episode key={episode.id} item={episode}/>)}
            </div>
            <div className={css.btn}>
                <button disabled={!prevNext.prev} onClick={prevPage}>prevPage</button>
                <button disabled={!prevNext.next} onClick={nextPage}>nextPage</button>
            </div>
        </div>
    );
}

export {Episodes};