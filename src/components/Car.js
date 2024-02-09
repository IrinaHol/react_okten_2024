import {carService} from "../services/carService";

const Car = ({car, setCarForUpdate, setTrigger}) => {
    const {id, brand, price, year} = car;

    const deleteCar = async () => {
        await carService.delete(car.id);
        setTrigger(prev => !prev)
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={deleteCar}>Delete</button>
            <hr/>
        </div>
    );
};

export {Car};