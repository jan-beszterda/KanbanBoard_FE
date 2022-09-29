import React from 'react'
import CreateBtn from './CreateBtn'
import mockData  from '../testData/test-data.json'
import TeamItem from './TeamItem'

function TeamList() {
  return (
    <div>
        <a className="  " href="#">
                
                <div className='flex justify-around'>
                <h6 className="mx-4 font-medium">My Teams </h6>
                <CreateBtn btnName={"+"} name={"Team name"}/>
                </div>

            </a>

            <div  className='flex flex-col justify-start items-center'>
                {mockData.map((team) => ( 
                  <TeamItem  team={team.teamName}/>
                ))}
            </div>

           
       
        </div>
  )
}

export default TeamList