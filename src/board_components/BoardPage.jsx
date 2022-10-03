import React from 'react'
import Column from '../kb-components/Column'
import AddColBtn from '../kb-components/AddColBtn'

function BoardPage() {
  return (
    <div >

      <div className=' mb-20 mt-5 flex flex-col justify-start text-start gap-8'>

      <h1 className=' text-3xl mt-5 mr-5'>Board name</h1>

      <button className=' text-start'>Back</button>

      </div>

      <div className='flex flex-row justify-center'>
      
       <Column/> 
      


      </div>


     


        


        
    </div>
  )
}

export default BoardPage