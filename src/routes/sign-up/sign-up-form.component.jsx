import './sign-up-form.styles.scss';
import { async } from "@firebase/util";
import { useState} from "react";
import { createAuthUserWithEmAndPass, creatUserDocumentFromAuth } from "../../utils/fire-base/fire-base.utils";
import FormInput from '../../components/form-input/form-input.component';
import ButtonC ,{BUTTON_TYPE_CLASSES}from '../../components/button/button.component';
import { UserContext } from '../../contexts/user.context';
const defaultformFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}
const SignUpForm=()=>{
    const [formFields,setFormFields]=useState(defaultformFields);

    const{displayName,email,password,confirmPassword}=formFields;
    //that`s hooked component
   // const {setCurrentUser}=useContext(UserContext);
    console.log('hit');
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
            const {user}=await createAuthUserWithEmAndPass(
                email,
                password
                );

            //setCurrentUser(user);

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