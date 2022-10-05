import React, {useState} from 'react'
import CreateBtn from '../kb-components/CreateBtn'
import TeamItem from '../team_components/TeamItem'
import testData from '../testData/test-data.json'
import AddTeamBtn from "../kb-components/AddTeamBtn";
import { loadTeams } from "../helper_functions/loadTeams";


function TeamList() {

    const [teams, setTeams] = useState([])
    let userId = localStorage.getItem('active-user-id');

    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
            // get the data from the api
            const data = await fetch('https://yourapi.com');
            // convert data to json
            const json = await data.json();
            return json;
        }
    }

    let load =  async () => {
        let teamLoad = await loadTeams(userId);
        setTeams(teamLoad);
    }

    load();
    console.log("teams:");
    console.log(teams);
    console.log("testData:");
    console.log(testData);

    return (
    <div>
        <a >
                <div className='flex justify-around'>
                <h6 className="mx-4 font-medium">My Teams </h6>
                <AddTeamBtn btnName={"+"} name={"Team name"}/>
                </div>

            </a>

            <div  className='flex flex-col justify-start items-center'>
                {testData.map((team) => (
                  <TeamItem teamId={team.id} key={team.id} teamName={team.teamName}/>
                ))}
            </div>
        </div>
  )
}

export default TeamList