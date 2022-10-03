import React from 'react'

import Column from '../kb-components/Column'
import {useParams} from 'react-router-dom'
import testData from '../testData/test-data.json'
import AddColBtn from '../kb-components/AddColBtn'

function BoardPage() {

  const {id} = useParams()
  const {teamid} = useParams()
  const boardName = testData.find((team) => team.id === teamid).boards.find((board) => board.id === id).boardName
  
  const columns = testData.find((team) => team.id === teamid).boards.find((board) => board.id === id).columnList 
  console.log(columns)
  return (
    <div >

      <div className='relative h-auto mb-10 mt-5 flex flex-col justify-start text-start gap-12 w-auto'>

      <h1 className=' text-3xl mt-5 mr-5'>{boardName}</h1>

      <button className=' text-start'>Back</button>

      </div>

      <div className='flex flex-row justify-evenly gap-5'>
      
      {columns.map((column) => <Column key={column.id} columnId={column.id} columnTitle={column.columnTitle} cards={column.cardList}/>)}
      
      <AddColBtn name={"Title"} btnName={"+ Add column"}></AddColBtn>

      </div>


      <div>
    </div>



        


        
    </div>
  )
}

export default BoardPage