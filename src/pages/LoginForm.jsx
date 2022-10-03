import React from 'react'
import Input from '../form_components/Input'
import FormHeader from '../form_components/FormHeader'
import FormFooter from '../form_components/FormFooter'
import FormButton from '../form_components/FormButton'
import { loginFields } from '../constants/formFields'
import { useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'



const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

function LoginForm({logo}) {
  const [loginState,setLoginState]=useState(fieldsState);

  const navigate = useNavigate();
  const toLayout = () => navigate("/layout", { replace: true });
  //const [loggedUser, setLoggedUser] = useState({});

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

      const logInUser = async () => {
        let response = await fetch('/api/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'},
          body: JSON.stringify(user)
        });

        let result = await response.json();

        //setLoggedUser(result);

        if (response.status === 200) {
          console.log('User logged in successfully');
        }
        return result;
      }

      logInUser(user).then((result) => {
        console.log("Success Logging In");
        console.log(result);
        //Set localStorage for user id
        localStorage.setItem('active-user-id', result.userId);
        let idTest = localStorage.getItem('active-user-id');
        console.log(idTest);
        toLayout();
      });

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