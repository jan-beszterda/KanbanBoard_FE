import React from 'react'
import AddTeamBtn from '../kb-components/AddTeamBtn'
import TeamItem from '../team_components/TeamItem'
import testData from '../testData/test-data.json'
import { loadTeams } from '../helper_functions/loadTeams';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function TeamList() {
  
  /*
  const [teams, setTeams] = useState([])
  let userId = localStorage.getItem('active-user-id');

  
  let load =  async () => {
    let teamLoad = await loadTeams(userId);
    setTeams(teamLoad);
  }

  useEffect(() => {
    load();
  }, [])

  */



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