import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import startImage from "../assets/Slice 1-2.png"
import logo from "../assets/colorfilter.svg"
import LoginForm from './LoginForm'
import RegisForm from './RegisForm'


function LandingPage() {
  return (
    <div>
    <div className='flex flex-row justify-between w-full h-screen gap-10'>
        <div className=' bg-transparent w-auto flex flex-col justify-center '>
          <Routes>
            <Route path="/" element={<LoginForm logo={logo} />} />
            <Route path="/regisform" element={<RegisForm logo={logo} />} />
          </Routes>
        </div>
        <div className=' '>
            <img className=' object-contain z-20' src={startImage} alt="" />
        </div>
    </div>
</div>
  )
}

export default LandingPage