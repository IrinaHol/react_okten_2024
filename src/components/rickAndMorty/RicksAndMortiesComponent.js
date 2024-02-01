import {RickAndMortyComponent} from "./RickAndMortyComponent";

const RicksAndMortiesComponent = () => {

    const rickAndMorty = [
        {
            id: 62,
            name: 'Canklanker Thom',
            status: 'Dead',
            species: 'Alien',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/62.jpeg'
        },
        {
            id: 230,
            name: 'Morty Jr.',
            status: 'Alive',
            species: 'Humanoid',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/230.jpeg'
        },
        {
            id: 454,
            name: 'Arbolian Mentirososian',
            status: 'Alive',
            species: 'Alien',
            gender: 'unknown',
            image: 'https://rickandmortyapi.com/api/character/avatar/454.jpeg'
        },
        {
            id: 527,
            name: 'Mothership Intern',
            status: 'Alive',
            species: 'Alien',
            gender: 'unknown',
            image: 'https://rickandmortyapi.com/api/character/avatar/527.jpeg'
        },
        {
            id: 640,
            name: 'Angry Glorzo',
            status: 'Dead',
            species: 'Alien',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/640.jpeg'
        },
        {
            id: 770,
            name: 'Hothead Rick',
            status: 'Dead',
            species: 'Human',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/770.jpeg'
        }
    ]
    return (
        <>
            <h1>The Rick and Morty API</h1>
            <div className={'container'}>

                {
                    rickAndMorty.map(value => <RickAndMortyComponent item={value} key={value.id}/>)
                }
            </div>
        </>
    );
};

export {RicksAndMortiesComponent};