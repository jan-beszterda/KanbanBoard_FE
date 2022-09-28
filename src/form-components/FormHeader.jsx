import React from 'react'
import { Link } from 'react-router-dom'

function FormHeader({logo, title, subtitle,linkUrl}) {
  return (
    <div>  
        <img className=' ml-36 pb-6'  src={logo} alt="" />
        <h2 className=' font-sans text-4xl font-bold pb-4'>{title}</h2>
        <p className=' font-sans text-base text-gray-400 pb-7 '>{subtitle} <Link  to={linkUrl}><span className=' text-red-pink-dark/70'>Click here</span></Link> </p>
</div>
  )
}

export default FormHeader