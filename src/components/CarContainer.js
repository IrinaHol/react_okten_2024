import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {useSelector} from "react-redux";

const CarContainer = () => {
    const {loading, error} = useSelector(state => state.cars);

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>errors</h1>}
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarContainer};