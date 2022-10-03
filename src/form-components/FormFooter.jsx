import React from 'react'

function FormFooter() {
  return (
    <div>
        <div className='flex justify-between mb-5  text-gray-400'>
                    <p className='flex items-center'><input className='mr-2 ' type="checkbox" /> Remember Me</p>
                    <p>Forgot password?</p>
                </div>
    </div>
    
  )
}

export default FormFooter