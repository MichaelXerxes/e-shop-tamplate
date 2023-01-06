import './sign-in-form.styles.scss';
import { async } from "@firebase/util";
import { useState } from "react";
import { createAuthUserWithEmAndPass, creatUserDocumentFromAuth ,
    signInWithEmailAndPassword,singInWithPopIpGoogle} from "../../utils/firebase/firebase.utils";
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
            const response = await signInWithEmailAndPassword(email,password);
        
            resetFormFields();
        }catch(e){
          
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
                <ButtonC buttonType='google' onClick={signInWIthGoogleUser}>Sign In</ButtonC>
       </div>
                
                
            </form>
        </div>
    );
};

export default SignInForm;