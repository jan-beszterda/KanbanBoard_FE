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
        labelText:"Username",
        labelFor:"text",
        id:"userName",
        name:"userName",
        type:"string",
        autoComplete:"off",
        isRequired:true,
        placeholder:"Choose your Username"
    },
    {
        labelText:"First name",
        labelFor:"text",
        id:"firstName",
        name:"firstName",
        type:"string",
        autoComplete:"off",
        isRequired:true,
        placeholder:"Your first name"
    },
    {
        labelText:"Last name",
        labelFor:"text",
        id:"lastName",
        name:"lastName",
        type:"string",
        autoComplete:"off",
        isRequired:true,
        placeholder:"Your last name"
    },
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
        autoComplete:"off",
        isRequired:true,
        placeholder:"Choose your password"
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm_password",
        id:"confirm_password",
        name:"confirm_password",
        type:"password",
        autoComplete:"off",
        isRequired:true,
        placeholder:"Confirm your Password"   
    }
]

export {loginFields,signupFields}