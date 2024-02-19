import {useAppContext} from "../hooks/useAppContext";

const A = () => {
    const value = useAppContext();
    return (
        <div>
            {value}
        </div>
    );
};

export {A};