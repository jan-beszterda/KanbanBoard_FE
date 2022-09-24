import React from 'react'
import FormHeader from './FormHeader'
import Input from './Input'
import { signupFields } from '../constants/formFields'
import FormFotter from './FormFotter'
import FormButton from './FormButton'
import { useState } from 'react'

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

function RegisForm({logo}) {

  const [signupState,setSignupState]=useState(fieldsState);

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
    createAccount()
  }

  //handle Signup API Integration here
  const createAccount=()=>{

  }
  
  return (
    <div>
        <form className='max-w-[400px] w-full mb-10 pt-0 pb-11 ml-36 bg-white p-4 ' onSubmit={handleSubmit}>
                <FormHeader linkUrl={"/"} logo={logo} title = {"Sign up"} subtitle ={"Already a user?"}/>
                {signupFields.map((field, index) => (
                    <Input 
                      key={index} 
                      handleChange={handleChange}
                      value={signupState[field.id]}
                      placeholder={field.placeholder} 
                      labelText={field.labelText} 
                      type={field.type} 
                      isRequired={field.isRequired}>
                    </Input>
                ))}
                    <FormFotter />

                <FormButton text={"Register"} onSubmit={handleSubmit}/>    
            </form>
    </div>
  )
}

export default RegisForm