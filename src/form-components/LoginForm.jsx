import React from 'react'
import Input from './Input'
import FormHeader from './FormHeader'
import FormFotter from './FormFotter'
import FormButton from './FormButton'
import { loginFields } from '../constants/formFields'
import { useState } from 'react'


const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

function LoginForm({logo}) {
  const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{

    }
  return (
    <div>
        <form className='max-w-[400px] w-full mb-48 ml-36 bg-white p-4' onSubmit={handleSubmit}>

            <FormHeader linkUrl={"/register"} logo={logo} title = {"Sign in"} subtitle ={"Create a Dashboard account? "} />
                {loginFields.map((field, index) => (
                    <Input key={index} 
                      handleChange={handleChange}
                      value={loginState[field.id]}
                      placeholder={field.placeholder} 
                      labelText={field.labelText} 
                      type={field.type} 
                      isRequired={field.isRequired}>
                    </Input>
                ))}
                <FormFotter/>

            <FormButton text={"Sign in"} onSubmit={handleSubmit}/>
            </form>
    </div>
  )
}

export default LoginForm