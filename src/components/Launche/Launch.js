const Launch = ({launch}) => {

    const {mission_name, launch_year, links: {mission_patch_small}} = launch;

    return (
        <div>

            <p>mission_name : {mission_name}</p>
            <p>launch_year : {launch_year}</p>
            <img src={mission_patch_small} alt={mission_name}/>

        </div>
    );
};

export {Launch};