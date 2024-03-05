import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carService} from "../services";
import {carActions} from "../store";
import {Car} from "./Car";

const Cars = () => {
    const {cars, trigger} = useSelector(state => state.carReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        carService.getAll().then(({data}) => dispatch(carActions.setCar(data)))
    }, [trigger, dispatch]);

    return (
        <div>
            {cars.map(car=> <Car car={car} key={car.id}/>)}
        </div>
    );
};

export {Cars};