import {useEffect, useState} from "react";

import {albumsService} from "../../services/albumsService";
import {Album} from "./Album";

const Albums = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        albumsService.getAll().then(({data}) => setAlbums(data))
    }, []);

    return (
        <div>
            <h2>Albums</h2>
            {
                albums.map(album => <Album album={album} key={album.id}/>)
            }
        </div>
    );
};

export {Albums};