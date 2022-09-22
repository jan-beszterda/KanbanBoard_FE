import React from 'react'
import logo from "../assets/colorfilter.svg"
import startImage2 from "../assets/36449961-2.png"
import startImage from "../assets/Rectangle 11.png"
import LoginForm from './LoginForm'


function HeadPage() {
  return (
    <div >

      <div className=' relative w-full h-full '>
        <img className=' absolute ml-3' src={logo}></img>
        </div>
        <div>
          <img className=' absolute right-0 z-0 ml-10 ' src={startImage} alt="/" />
          <img src={startImage2} alt="" className=" absolute right-0 h-[500px] mt-52    " />
          </div>

          <div className=' grid place-items-start h-screen ml-20'>
            
            <LoginForm></LoginForm>
          </div>
        </div>
  )
}

export default HeadPage