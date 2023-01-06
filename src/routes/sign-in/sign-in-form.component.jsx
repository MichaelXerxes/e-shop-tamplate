import './sign-in-form.styles.scss';
import { async } from "@firebase/util";
import { useState } from "react";
import { createAuthUserWithEmAndPass, creatUserDocumentFromAuth ,
    signInAuthUserWithEmAndPass,singInWithPopIpGoogle} from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/form-input/form-input.component";
import ButtonC from '../../components/button/button.component';
const defaultformFields={
    email:'',
    password:'',

}
const SignInForm=()=>{
    const [formFields,setFormFields]=useState(defaultformFields);

    const{email,password}=formFields;

    const resetFormFields=()=>{
        resetFormFields();
    };
    const signInWIthGoogleUser=async ()=>{
        const {user} =await singInWithPopIpGoogle();
       creatUserDocumentFromAuth(user);
    }

    const handleSubmit=async(event)=>{

        event.preventDefault();

       

        try{
            const response = await signInAuthUserWithEmAndPass(
                email,password
                );
        
            resetFormFields();
        }catch(e){
          if(e.code==='auth/wrong-password'){
            alert('incorect password, Please try again.');
          }else if (e.code==='auth/user-not-found'){
            alert('incorect login details, Please try again.');
          }
        }

    };

    const handleChange=(event)=>{
        const {name,value}=event.target;

        setFormFields({...formFields,[name]:value});
    };

    return  (
        <div>
            <h2>ALready have an account</h2>
            <span>Sign In with email and password</span>
            <form onSubmit={{handleSubmit}}>
        

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

       <div className='buttons-container'>
       <ButtonC buttonType='inverted' type="submit">Sign Up</ButtonC>
       <ButtonC buttonType='google' onClick={signInWIthGoogleUser}
                type='button'
       >Sign In</ButtonC>
       </div>
                
                
            </form>
        </div>
    );
};

export default SignInForm;