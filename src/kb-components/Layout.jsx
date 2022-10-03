import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import BoardPage from './BoardPage'
import {Routes,Route} from 'react-router-dom'
import TeamPage from './TeamPage'


function Layout() {
  return (
    <div className="min-w-full min-h-screen  h-screen overflow-hidden" >
        <NavBar/>
        <SideBar/>
         <main className=" px-96 pt-28">

         

        <Routes>
            <Route path="/layout" element={<Layout/>}/>
            <Route path="/teampage/:id" element={<TeamPage/>}/>
            <Route path="/boardpage" element={<BoardPage/>}/>
        </Routes>
         

         </main>

    </div>
  )
}

export default Layout