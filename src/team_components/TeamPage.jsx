import React from 'react'
import CreateBtn from '../kb-components/CreateBtn'
import BoardItem from '../board_components/BoardItem'
import {useParams} from 'react-router-dom'
import testData from '../testData/test-data.json'
import { loadTeams } from '../helper_functions/loadTeams'

function TeamPage() {

  // get team id from url
  // get board list from team id

  let userId = localStorage.getItem('active-user-id');
  
  let load =  async () => {
    let teamLoad = await loadTeams(userId);
    console.log(teamLoad);
    return teamLoad;
  }

  let teams = load();
  console.log(teams);
  
  let id = teams.map(team => team.teamId);
  const teamName = teams.find((team) => team.id === id).teamName
  const boards = teams.find((team) => team.id === id).boards
  
 console.log(boards)
  return (
    <div>

      <div>
      <h1 className=' pt-5 text-3xl'>{teamName}</h1>

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