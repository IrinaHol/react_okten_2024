import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carActions} from "../store";
import {Car} from "./Car";

const Cars = () => {
    const {cars, trigger} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [trigger, dispatch]);

    return (
        <div>
            {cars.map(car=> <Car car={car} key={car.id}/>)}
        </div>
    );
};

export {Cars};