import React from 'react'
import LoginForm from "../pages/LoginForm"
import RegisForm from "../pages/RegisForm";
import {Routes,Route} from 'react-router-dom'
import NavBar from '../page_partials/NavBar'
import SideBar from '../page_partials/SideBar'
import {loadUser} from '../helper_functions/loadUser'
import { useState,useEffect } from 'react';


function Layout({children}) {

const [activeUser, setActiveUser] = useState([]);
let userIdFromLocaleStorage = localStorage.getItem('active-user-id');

let load = async () => {
  let userLoad = await loadUser(userIdFromLocaleStorage);
  setActiveUser(userLoad);
}

useEffect(() => {
  load();
}, [])

let fullName = activeUser.firstName + " " + activeUser.lastName;

  return (
    <div className="min-w-full min-h-screen w-auto " >
        <NavBar name = {fullName}></NavBar>
        <SideBar/>
        

         <main className=" px-96 pt-28 flex">
           {children}

         </main>

    </div>
  )
}

export default Layout