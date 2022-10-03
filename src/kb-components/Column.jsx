import React from 'react'
import AddCardBtn from './AddCardBtn'
import AddColBtn from './AddColBtn'

function Column() {
  return (

    <div className=' flex flex-row gap-4 mt-5 w-[250px]  border-2 rounded-md '>

    <div >
        <div className='flex justify-between'>
        <h1 className=' mb-4 mt-4 ml-4 font-bold'>Title</h1>

        </div>
        <hr className=' rounded-md mx-5 border-2 border-red-pink'></hr>

        <div className='flex justify-center'>
        <AddCardBtn name={"Title"} btnName={" + Add card"}/>
        </div>
    </div>

    <div>
      <AddColBtn name={"Title"} btnName={"+ Add column"}></AddColBtn>


    </div>


    </div>


    



  )
}

export default Column