import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {useAppContext} from "../../hooks";

const CarForm = () => {
    const {register, handleSubmit, reset, isValid} = useForm();
    const {changeTrigger} = useAppContext();
    const createCar = async (car) => {
        await carService.create(car)
        // reset()
        changeTrigger()
    }

    return (
        <form onSubmit={handleSubmit(createCar)}>
            {/*{error && <div>username or password incorrect</div>}*/}
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>save</button>
        </form>
    );
};

export {CarForm};