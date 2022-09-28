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
      let user = {
        "userName":"",
        "firstName":"",
        "lastName":"",
        "password":signupState.password,
        "email":signupState.email,
        "teams":[],
        "invitations":[]
      }
      // Add check for confirm password
      const signUpUser = async () => {
        let response = await fetch('/api/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'},
          body: JSON.stringify(user)
        });
        console.log(response)
        let result = await response.json();
        console.log(JSON.parse(result))
      }
      signUpUser(); 
    }
  
  
  return (
    <div>
        <form className='max-w-[400px] w-full mb-10 pt-0 pb-11 ml-36 bg-white p-4 ' onSubmit={handleSubmit}>
                <FormHeader linkUrl={"/"} logo={logo} title = {"Sign up"} subtitle ={"Already a user?"}/>
                {signupFields.map((field) => (
                    <Input 
                      key={field.id} 
                      id={field.id}
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