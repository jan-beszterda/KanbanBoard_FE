import React from 'react'
import CreateBtn from '../kb-components/CreateBtn'
import BoardItem from '../board_components/BoardItem'
import {useParams} from 'react-router-dom'
import testData from '../testData/test-data.json'

function TeamPage() {

  const {id} = useParams()
  const boards = testData.find((team) => team.id === id).boards
  
 console.log(boards)
  return (
    <div>

      <div>
      <h1 className=' pt-5 text-3xl'>Team name</h1>

      <div className=' flex gap-4 py-10'>
      <CreateBtn name={"Board name"} btnName={" Create board"}/>

      </div>
      </div>

     


      <div className='w-[800px] rounded-md bg-light-grey flex flex-col justify-evenly' >
      {boards.map((board) => <BoardItem teamId={id} key={board.id} boardId = {board.id} boardName={board.boardName}/>)}

     


      </div>

     
      
    </div>
  )
}

export default TeamPage