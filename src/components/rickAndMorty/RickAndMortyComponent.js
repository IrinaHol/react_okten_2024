import './rickAndMorty.css';

const RickAndMortyComponent = ({item}) => {

    const {id, name, status, species, gender, image} = item;

    return (
        <div className={'mainBox'}>
            <img src={image} alt={name}/>
            <div className={'info'}>
                <p>{id}</p>
                <h2>{name}</h2>
                <p>Status: {status} - Species: {species}</p>
                <p>Gender: {gender}</p>
            </div>
        </div>
    );
};

export {RickAndMortyComponent};