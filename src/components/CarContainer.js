import {useEffect, useState} from "react";
import {carService} from "../services/carService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarContainer = () => {

    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger]);
    return (
        <div>
            <CarForm setTrigger={setTrigger}  carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate} trigger={trigger}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>
        </div>
    );
};

export {CarContainer};