import React from 'react'
import HeadPage from './HeadPage'
function LoginForm() {
  return (
    <div className='flex justify-center items-center h-full'>  
        <form>
            <h1 className=''>Sign In</h1>
            <p>Create a KanbanBoard account? <span>Click here</span></p>

            <div>
                <label htmlFor="">Email</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" />
            </div>

            <div>
                <p><input type="checkbox" />Remember me</p>
                <p>Forgot password</p>
                
            </div>
            <button>Sign in</button>

        </form>
    </div>
  )
}

export default LoginForm