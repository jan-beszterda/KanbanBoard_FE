import React from 'react'
import {useNavigate} from 'react-router-dom'

function Signout() {
  const navigate = useNavigate();
  const signOutUser = () => {
  
    localStorage.clear()    
    navigate("/", { replace: true });  
    
  }
  return (
    <div>
        <a className= "flex  justify-center px-4 py-2 pt-50 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
            <button className= "mx-4 font-medium" onClick={signOutUser}>Sign out</button>
        </a>
    </div>
  )
}

export default Signout