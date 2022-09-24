import React from 'react'
import FormHeader from './FormHeader'
import Input from './Input'
import { signupFields } from '../constants/formFields'
import FormFotter from './FormFotter'
import FormButton from './FormButton'




function RegisForm({logo}) {
  return (
    <div>
        <form className='max-w-[400px] w-full mb-10 pt-0 pb-11 ml-36 bg-white p-4 '>
                <FormHeader logo={logo} title = {"Sign up"} subtitle ={"Already a user?"}/>
                {signupFields.map((field, index) => (
                    <Input key={index} placeholder={field.placeholder} labelText={field.labelText} type={field.type} isRequired={field.isRequired}></Input>
                ))}
                    <FormFotter />

                <FormButton />    
            </form>
    </div>
  )
}

export default RegisForm