import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import {carValidator} from "../validators/carValidator";
import {carActions} from "../store";

const CarForm = () => {
    const {carForUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    const {
        reset, register, handleSubmit,
        formState: {errors, isValid}, setValue
    } = useForm(
        {mode: 'all', resolver: joiResolver(carValidator)});

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue])

    const saveCar = (car) => {
        dispatch(carActions.create({car}))
        reset();
    }

    const updateCar = async (car) => {
        dispatch(carActions.update({id: carForUpdate.id, car}))
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? updateCar : saveCar)}>
                <input type="text" placeholder={'brand'} {...register('brand', {})}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>

                {errors.brand && <div>{errors.brand.message}</div>}
                {errors.price && <div>{errors.price.message}</div>}
                {errors.year && <div>{errors.year.message}</div>}
            </form>
        </div>
    );
};

export {CarForm};