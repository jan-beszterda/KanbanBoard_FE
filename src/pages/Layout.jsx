import React from 'react'
import NavBar from '../page_partials/NavBar'
import SideBar from '../page_partials/SideBar'
import BoardPage from '../board_components/BoardPage'
import {Routes,Route} from 'react-router-dom'
import TeamPage from '../team_components/TeamPage'
import LoginForm from "../pages/LoginForm"
import RegisForm from "../pages/RegisForm";


function Layout() {
  return (
    <div className="min-w-full min-h-screen  h-screen overflow-hidden" >
        <NavBar/>
        <SideBar/>
         <main className=" px-96 pt-28">
            <Routes>
                <Route path="/layout" element={<Layout/>}/>
                <Route path="/loginform" element={<LoginForm/>}/>
                <Route path="/regisform" element={<RegisForm/>}/>
                <Route path="/teampage/:id" element={<TeamPage/>}/>
                <Route path="/boardpage" element={<BoardPage/>}/>
            </Routes>
         </main>

    </div>
  )
}

export default Layout