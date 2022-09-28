const loginFields=[
    {
        labelText:"Email address",
        labelFor:"email",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Enter your email"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Enter your password"   
    }
]

const signupFields=[  
    {
        labelText:"Email",
        labelFor:"text",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Enter your email"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"password",
        isRequired:true,
        placeholder:"Enter your password"   
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm_password",
        id:"confirm_password",
        name:"confirm_password",
        type:"password",
        autoComplete:"confirm_password",
        isRequired:true,
        placeholder:"Confirm your Password"   
    }
]

export {loginFields,signupFields}