import {useForm} from "react-hook-form";
import {carService} from "../services/carService";
import {useEffect} from "react";

const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {

    const {reset, register, handleSubmit,
        formState: {errors, isValid}, setValue} = useForm({mode: 'all'});

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
                <input type="text" placeholder={'brand'} {...register('brand', {
                    pattern: {
                        value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                        message: 'min 1 max 2 character'
                    },
                    required:true
                })}/>
                <input type="text" placeholder={'price'} {...register('price', {
                    valueAsNumber: true,
                    min: {value: 0, message: 'min 0'},
                    max: {value: 1_000_000, message: 'max 1 000 000'},
                    required:true
                })}/>
                <input type="text" placeholder={'year'} {...register('year', {
                    valueAsNumber: true,
                    min: {value: 1990, message: 'min 1990'},
                    max: {value: new Date().getFullYear(), message: 'max current year'},
                    required:true
                })}/>
                <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>

                {errors.brand && <div>{errors.brand.message}</div>}
                {errors.price && <div>{errors.price.message}</div>}
                {errors.year && <div>{errors.year.message}</div>}
            </form>
        </div>
    );
};

export {CarForm};