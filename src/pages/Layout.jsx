import React from 'react'
import LoginForm from "../pages/LoginForm"
import RegisForm from "../pages/RegisForm";
import {Routes,Route} from 'react-router-dom'
import NavBar from '../page_partials/NavBar'
import SideBar from '../page_partials/SideBar'


function Layout({children}) {
  return (
    <div className="min-w-full min-h-screen w-auto " >
        <NavBar/>
        <SideBar/>
        

         <main className=" px-96 pt-28 flex">
           {children}

         </main>

    </div>
  )
}

export default Layout