import './sign-up-form.styles.scss';
import { async } from "@firebase/util";
import { useState} from "react";
import { createAuthUserWithEmAndPass, creatUserDocumentFromAuth } from "../../utils/fire-base/firebase.utils";
import FormInput from '../../components/form-input/form-input.component';
import ButtonC ,{BUTTON_TYPE_CLASSES}from '../../components/button/button.component';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/user.action';
const defaultformFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}
const SignUpForm=()=>{
    const [formFields,setFormFields]=useState(defaultformFields);
    const dispatch=useDispatch();
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
          dispatch(signUpStart(email,password,displayName));
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
            <h2>Don`t have an account?</h2>
            <span>Sign Up with email and password</span>
            <form onSubmit={handleSubmit}>
            <FormInput
          label='Display Name'
          type='text'

          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
                <ButtonC buttonType={BUTTON_TYPE_CLASSES.google} type="submit">Sign Up</ButtonC>
            </form>
        </div>
    );
};

export default SignUpForm;