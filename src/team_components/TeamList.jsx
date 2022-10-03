import React from 'react'
import CreateBtn from './CreateBtn'
import TeamItem from './TeamItem'
import testData from '../testData/test-data.json'
function TeamList() {
  return (
    <div>
        <a >
                <div className='flex justify-around'>
                <h6 className="mx-4 font-medium">My Teams </h6>
                <CreateBtn btnName={"+"} name={"Team name"}/>
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