const Launch = ({launch}) => {

    const {mission_name, launch_year, links} = launch;

    return (
        <div>
            {launch_year < 2020 && <div>
                <p>mission_name : {mission_name}</p>
                <p>launch_year : {launch_year}</p>
                <img src={links.mission_patch_small} alt={mission_name}/>
            </div>}
        </div>
    );
};

export {Launch};