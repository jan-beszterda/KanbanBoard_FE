import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import BoardPage from './BoardPage'
import {Routes,Route} from 'react-router-dom'


function HomePage() {
  return (
    <div className="min-w-full min-h-screen  h-screen overflow-hidden" >
        <NavBar/>
        <SideBar/>
         <main className=" px-96 pt-28">

         

        <Routes>
            <Route path="/teampage" element={<TeamPage/>}/>
            <Route path="/boardpage" element={<BoardPage/>}/>
            <Route path="/layout" element={<Layout/>}/>
        </Routes>
         

         </main>

    </div>
  )
}

export default HomePage