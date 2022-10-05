import React from 'react'

function NavBar({name}) {
    
    
  return (
    <div>
        <div className="   bg-white fixed h-16 pl-40 border-2 py-10 border-gray-100  w-full flex items-center justify-evenly pr-5 z-10">
            <div className=" flex px-5 items-center">
                
                <input type="text" placeholder="Search for anything ..."
                className=" bg-gray-100 border-0 rounded text-black px-10 py-2 pr-36
                outline-none text-start text-sm "/>
            </div>

            <div className="flex space-x-6">
                
                <div className="flex items-center text-black">
                    <h3 className="font-bold mr-3">{name}</h3>
                </div>
            </div>
        </div></div>
  )
}

export default NavBar