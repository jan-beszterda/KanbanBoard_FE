import React from 'react'
import CreateBtn from '../kb-components/CreateBtn'
import TeamItem from '../team_components/TeamItem'
import testData from '../testData/test-data.json'
import AddTeamBtn from "../kb-components/AddTeamBtn";
import loadTeams from "../helper_functions";

function TeamList() {
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