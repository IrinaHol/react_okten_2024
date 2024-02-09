import {Car} from "./Car";

const Cars = ({cars, setCarForUpdate, setTrigger}) => {

    return (
        <div>
            {cars.map(car=> <Car car={car} key={car.id} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>)}
        </div>
    );
};

export {Cars};