import React from 'react'
import AddCardBtn from './AddCardBtn'

function Column() {
  return (
    <div className=' w-[250px] h-[500px] border-2 rounded-md '>
        
        <div className='flex justify-between'>
        <h1 className=' mt-2 ml-4 font-bold'>Title</h1>
        <AddCardBtn name={"Add card"} btnName={"+"}></AddCardBtn>

        </div>
        <hr className=' rounded-md mx-5 border-2 border-red-pink'></hr>
    </div>
  )
}

export default Column