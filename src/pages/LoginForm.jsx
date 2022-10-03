import React from 'react'
import Input from '../form-components/Input'
import FormHeader from '../form-components/FormHeader'
import FormFooter from '../form-components/FormFooter'
import FormButton from '../form-components/FormButton'
import { loginFields } from '../constants/formFields'
import { useState } from 'react'


const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

function LoginForm({logo}) {
  const [loginState,setLoginState]=useState(fieldsState);
  const [loggedUser, setLoggedUser] = useState({});

    const handleChange=(e)=>{
      console.log(e.target.id, e.target.value)
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{
      const user = {
        "userName":"",
        "firstName":"",
        "lastName":"",
        "password": loginState.password,
        "email": loginState.email,
        "teams": [],
        "invitations": []
      }
      const logInUser = async (data={}) => {
        const response = await fetch('/api/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        });
        return response.json();
      }
      logInUser(user).then((data) => {
        console.log("Success")
        console.log(data);
      }); 
      // Navigate to dashboard
      // Pass User object
      // Set cookie for user id
    }
  return (
    <div>
        <form className='max-w-[400px] w-full mb-48 ml-36 bg-white p-4' onSubmit={handleSubmit}>

            <FormHeader linkUrl={"/register"} logo={logo} title = {"Sign in"} subtitle ={"Create a Dashboard account? "} />
                {loginFields.map((field, index) => (
                    <Input key={index} 
                      id={field.id}
                      handleChange={handleChange}
                      value={loginState[field.id]}
                      placeholder={field.placeholder} 
                      labelText={field.labelText} 
                      type={field.type} 
                      isRequired={field.isRequired}>
                    </Input>
                ))}
                <FormFooter/>

            <FormButton text={"Sign in"} onSubmit={handleSubmit}/>
            </form>
    </div>
  )
}

export default LoginForm