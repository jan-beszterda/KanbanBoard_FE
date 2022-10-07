import React from 'react'
import {Link} from 'react-router-dom'


function BoardItem({teamId,boardId,boardName,boardDescription,index}) {
  return (
    <div>
      
        <ul className='flex flex-col' >
          <Link to={`/boardpage/${teamId}/${boardId}`}>
          <li key={boardId}  id = {boardId} teamId ={teamId} className=' flex flex-col  rounded-lg font-medium pl-5 my-5 py-10 mx-5 text-start bg-white'>{boardName} <span className='pt-2'>{boardDescription}</span></li>

          </Link>
        
      </ul>
    </div>
  )
}

export default BoardItem