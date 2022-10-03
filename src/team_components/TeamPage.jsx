import React from 'react'
import CreateBtn from './CreateBtn'
import BoardItem from './BoardItem'
import {useParams} from 'react-router-dom'
import testData from '../testData/test-data.json'

function TeamPage() {

  const {id} = useParams()
  const boards = testData.find((team) => team.id === id).boards
  
 console.log(boards)
  return (
    <div>

      <h1 className=' pt-5 text-3xl'>Team name</h1>

      <div className=' flex gap-4 py-16'>
      <CreateBtn name={"Board name"} btnName={" Create board"}/>

      </div>

      <div className='flex flex-col my-5 gap-2 border-2 rounded border-gray-200' >
      {boards.map((board) => <BoardItem key={board.id} boardId = {board.id} boardName={board.boardName}/>)}

      </div>
      
    </div>
  )
}

export default TeamPage