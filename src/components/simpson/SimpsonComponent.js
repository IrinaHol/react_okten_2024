import './simpson.css';
const SimpsonComponent = ({item}) => {

    const {name, surname, age, img} = item;
    return (
        <div className={'block'}>
            <div className={'simpsonBlock'}>
                <h2>{name} {surname}</h2>
                <p>Age: {age}</p>
                <img src={img} alt={name}/>
            </div>
        </div>
    );
};

export {SimpsonComponent};