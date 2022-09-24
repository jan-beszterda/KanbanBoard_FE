import React from 'react'
import Input from './Input'
import FormHeader from './FormHeader'
import FormFotter from './FormFotter'
import FormButton from './FormButton'
import { loginFields } from '../constants/formFields'



function LoginForm({logo}) {
  return (
    <div>
        <form className='max-w-[400px] w-full mb-48 ml-36 bg-white p-4 '>

            <FormHeader logo={logo} title = {"Sign in"} subtitle ={"Create a Dashboard account? "} />

                {loginFields.map((field, index) => (
                    <Input key={index} placeholder={field.placeholder} labelText={field.labelText} type={field.type} isRequired={field.isRequired}></Input>
                ))}
                <FormFotter/>

            <FormButton />
            </form>
    </div>
  )
}

export default LoginForm