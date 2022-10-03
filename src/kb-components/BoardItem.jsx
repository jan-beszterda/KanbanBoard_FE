import React from 'react'



function BoardItem({boardId,boardName}) {
  return (
    <div>
        <ul className='flex flex-col '>
        <li key={boardId}  id = {boardId} className=' flex flex-col py-5 border-t-2 px-5 border-gray-200 text-start  '>{boardName} <span className='pt-2'>Info</span></li>
        
      </ul>
    </div>
  )
}

export default BoardItem