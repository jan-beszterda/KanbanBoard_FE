import React from "react";
import FormHeader from "../form_components/FormHeader";
import Input from "../form_components/Input";
import { signupFields } from "../constants/formFields";
import FormFooter from "../form_components/FormFooter";
import FormButton from "../form_components/FormButton";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const fields = signupFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

function RegisForm({ logo }) {
  const [signupState, setSignupState] = useState(fieldsState);

  const navigate = useNavigate();
  const toLayout = () => navigate("/profilepage", { replace: true });

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    function passwordConfirmed() {
      if (signupState.password !== signupState.confirm_password) {
        // clear password & confirm_password fields and give message that they must match
        signupState.password = "";
        signupState.confirm_password = "";
        return false;
      }
      return true;
    }

    if (passwordConfirmed()) {
      createAccount();
    }
  };

  //handle Signup API Integration here
  const createAccount = () => {
    const user = {
      userId: "",
      firstName: signupState.firstName,
      lastName: signupState.lastName,
      password: signupState.password,
      email: signupState.email,
      teams: [],
      invitations: [],
    };

    const signUpUser = async (data = {}) => {
      let response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let result = await response.json();

      return result;
    };
    signUpUser(user).then((result) => {
      localStorage.setItem("active-user-id", result.userId);

      toLayout();
    });
  };

  return (
    <div>
      <form
        className="max-w-[400px] w-full ml-36 bg-white p-4 "
        onSubmit={handleSubmit}
      >
        <FormHeader
          mt={"mt-44"}
          linkUrl={"/"}
          logo={logo}
          title={"Sign up"}
          subtitle={"Already a user?"}
        />

        {signupFields.map((field) => (
          <Input
            key={field.id}
            id={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            placeholder={field.placeholder}
            labelText={field.labelText}
            type={field.type}
            isRequired={field.isRequired}
          ></Input>
        ))}
        <FormFooter />

        <FormButton text={"Register"} onSubmit={handleSubmit} />
      </form>
    </div>
  );
}

export default RegisForm;
