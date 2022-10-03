import React from 'react'
import CreateBtn from '../kb-components/CreateBtn'

function TeamList() {
  return (
    <div>
        <a class="  " href="#">
                
                <div className='flex justify-around'>
                <h6 class="mx-4 font-medium">My Teams </h6>
                <CreateBtn btnName={"+"} name={"Team name"}/>
                </div>

            </a>
        
        
       
        </div>
  )
}

export default TeamList