import {useEffect, useState} from "react";
import {launchServices} from "../../services/launchService";
import {Launch} from "../Launche/Launch";

const Launches = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        launchServices.getAll().then(({data}) => {
            const filterValue = data.filter(value => value.launch_year !== '2020')
            setLaunches(filterValue)
        })
    }, []);


    return (
        <div>
            {launches.map((item, index) => <Launch launch={item} key={index}/>)}
        </div>
    );
};

export {Launches};