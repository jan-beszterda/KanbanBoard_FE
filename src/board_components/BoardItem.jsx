import React from 'react'

function BoardItem() {
  return (
    <div>
        <ul className='flex flex-col'>
        <li className=' flex flex-col py-5 border-y-2 border-grey-300'>Board name <span className='pt-2'>Info</span></li>
        
      </ul>
    </div>
  )
}

export default BoardItem