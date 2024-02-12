import {useForm} from "react-hook-form";
import {carService} from "../services/carService";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/carValidator";

const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {

    const {reset, register, handleSubmit,
        formState: {errors, isValid}, setValue} = useForm(
            {mode: 'all', resolver: joiResolver(carValidator)});

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue])

    const saveCar = async (car) => {
        await carService.create(car);
        setTrigger(prev => !prev)
        reset();
    }

    const updateCar = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        setTrigger(prev => !prev)
        setCarForUpdate(null)
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