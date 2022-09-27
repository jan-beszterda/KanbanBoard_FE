import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'


function Layout() {
  return (
    <div className='flex flex-col w-full h-screen' >
        <NavBar/>
        <SideBar/>
        
        <h1 className=' text-center  mt-40'>hii</h1>
    </div>
  )
}

export default Layout