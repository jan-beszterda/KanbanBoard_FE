import React from 'react'
import TeamItem from './TeamItem'
import Signout from './Signout'
import Home from './Home'
import Extra from './Extra'
function Menu() {
  return (
    <div>
       <div class=" fixed flex flex-col w-60 h-screen py-8 bg-white border-r dark:bg-white dark:border-gray-200">
    <h2 class="  text-center text-3xl font-semibold text-gray-800 dark:text-black">
        Dashboard</h2>
    <hr class=" mt-[14.5px] border-1 border-gray-200" />
    <div class="flex flex-col items-center justify-between flex-1 mt-6">
        
        <nav>
            <Home/>
            <Extra/>
            <hr class="my-5 border-gray-200 dark:border-gray-200" />
                <TeamItem/>
        </nav>

        <Signout/>
        
    </div>
</div>
    </div>
  )
}

export default Menu