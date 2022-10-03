import React from 'react'
import CreateBtn from './CreateBtn'
import BoardItem from '../board_components/BoardItem'

function TeamPage() {
  return (
    <div>

      <h1 className=' pt-5 text-3xl'>Team name</h1>

      <div className=' flex gap-4 py-16'>
      <CreateBtn name={"Board name"} btnName={" Create board"}/>
      </div>
       <BoardItem/>
      
      

    </div>
  )
}

export default TeamPage