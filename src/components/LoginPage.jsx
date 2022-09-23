import React from 'react'
import startImage from "../assets/Slice 1-2.png"
import logo from "../assets/colorfilter.svg"



function HeadPage() {
  return (
    <div>
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='bg-white flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mb-48 ml-36 bg-white p-4 '>
              <img className=' ml-36 '  src={logo} alt="" />
                <h2 className=' font-sans text-4xl font-bold pt-6'>Sign in</h2>
                <p className=' font-sans text-base text-gray-400 py-6 mb-5'>Create a Dashboard account?  <span className=' text-red-400'>Click here</span></p>
                <div className='flex flex-col py-2 '>
                    <label className=' font-sans mb-4'>Email</label>
                    <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-3 pl-3 pr-3 shadow-sm focus:outline-none focus:border-green-200 focus:ring-1 sm:text-sm" placeholder="Enter your email adress" type="text"/>
                </div>
                <div className='flex flex-col py-2 mb-5'>
                    <label className=' font-sans mb-4'>Password</label>
                    <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-3 pl-3 pr-3 shadow-sm focus:outline-none focus:border-green-200 focus:ring-1 sm:text-sm" placeholder="Enter your password" type="text"/>
                </div>
                <div className='flex justify-between mb-5  text-gray-400'>
                    <p className='flex items-center'><input className='mr-2 ' type="checkbox" /> Remember Me</p>
                    <p>Forgot password?</p>
                </div>
                <button className='border w-full my-5 py-4 rounded-md bg-red-pink hover:bg-red-pink-dark/70 text-white'>Sign In</button>
                
            </form>
        </div>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={startImage} alt="" />
        </div>
    </div>
</div>
  )
}

export default HeadPage