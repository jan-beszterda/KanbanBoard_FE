import React from 'react'

function NavBar() {
  return (
    <div>
        <div className=" absolute h-16 pl-40 border-2 py-10 border-gray-100  w-full flex items-cente justify-evenly pr-5">
            <div className=" flex px-5 items-center">
                
                <input type="text" placeholder="Search for anything ..."
                className=" bg-gray-100 border-0 rounded text-black px-10 py-2 pr-36
                outline-none text-start text-sm "/>
            </div>

            <div className="flex space-x-6">
                
                <div className="flex items-center text-black">
                    <h3 className="font-bold mr-3">M. John Doe</h3>
                    <p>qqq</p>
                </div>
            </div>
        </div></div>
  )
}

export default NavBar