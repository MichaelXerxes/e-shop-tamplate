import { async } from "@firebase/util";
import { useState } from "react";
import { createAuthUserWithEmAndPass, creatUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultformFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}
const SignUpForm=()=>{
    const [formFields,setFormFields]=useState(defaultformFields);

    const{displayName,email,password,confirmPassword}=formFields;

    const resetFormFields=()=>{
        resetFormFields();
    };

    const handleSubmit=async(event)=>{

        event.preventDefault();

        if(password!==confirmPassword){
            alert("Password do not match");
            return;
        }

        try{
            const {user}=await createAuthUserWithEmAndPass(email,password);
            await creatUserDocumentFromAuth(user,{displayName});
            // if is succeeded
        }catch(e){
            if(e.code==='auth/email-already-in-use'){
                alert('Email already in use !!!');
            }
        }

    };

    const handleChange=(event)=>{
        const {name,value}=event.target;

        setFormFields({...formFields,[name]:value});
    };

    return  (
        <div>
            <h1>Sign Up with email and password</h1>
            <form onSubmit={{handleSubmit}}>
                <label>Display Name</label>
                <input type='text' required onChange={handleChange}name='displayName' value={displayName}/>

                <label>Email</label>
                <input type='email' required onChange={handleChange} name='email' value={email}/>

                <label>Password</label>
                <input type='password' required onChange={handleChange} name='password' value={password}/>

                <label>Confirm Password</label>
                <input type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;