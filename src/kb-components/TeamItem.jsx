import React from 'react'
import mockData from '../testData/test-data.json'



function TeamItem({team}) {
        
    const boardsName = mockData.filter((item) => item.id === team.id).map((item) => item.boards.map((board) => board.boardName))

       
  return (
    <div>
        <button >{team}</button>

        
    </div>
  )
}

export default TeamItem