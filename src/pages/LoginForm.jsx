import React from "react";
import Input from "../form_components/Input";
import FormHeader from "../form_components/FormHeader";
import FormFooter from "../form_components/FormFooter";
import FormButton from "../form_components/FormButton";
import { loginFields } from "../constants/formFields";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

function LoginForm({ logo }) {
  const [loginState, setLoginState] = useState(fieldsState);

  const navigate = useNavigate();
  const toLayout = () => navigate("/profilepage", { replace: true });

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  const authenticateUser = () => {
    const user = {
      firstName: "",
      lastName: "",
      password: loginState.password,
      email: loginState.email,
      teams: [],
      invitations: [],
    };

    const logInUser = async () => {
      let response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      let result = await response.json();
      return result;
    };

    logInUser(user).then((result) => {
      localStorage.setItem("active-user-id", result.userId);
      toLayout();
    });
  };

  return (
    <div>
      <form
        className="max-w-[400px] w-full mb-48 ml-36 bg-white p-4"
        onSubmit={handleSubmit}
      >
        <FormHeader
          mt={"mt-20"}
          linkUrl={"/regisform"}
          logo={logo}
          title={"Sign in"}
          subtitle={"Create a Dashboard account? "}
        />
        {loginFields.map((field, index) => (
          <Input
            key={index}
            id={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            placeholder={field.placeholder}
            labelText={field.labelText}
            type={field.type}
            isRequired={field.isRequired}
          ></Input>
        ))}
        <FormFooter />

        <FormButton text={"Sign in"} onSubmit={handleSubmit} />
      </form>
    </div>
  );
}

export default LoginForm;
