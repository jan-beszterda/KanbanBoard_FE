import React from 'react'
import {Link} from 'react-router-dom'



function TeamItem({teamName,teamId}) {
        
     
  return (
    <div>
      <Link key={teamId} id={teamId} to={`/teampage/${teamId}`}>{teamName}</Link>
    </div>
  )
}

export default TeamItem