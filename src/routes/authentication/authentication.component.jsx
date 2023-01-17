import {singInWithPopIpGoogle,creatUserDocumentFromAuth, auth} from '../../utils/firebase/firebase.utils';
import { useEffect } from 'react';
import './authentication.styles.scss';
import { getRedirectResult } from 'firebase/auth';
import { async } from '@firebase/util';
import SignInForm from '../sign-in/sign-in-form.component';
import SignUpForm from '../sign-up/sign-up-form.component';

const Authentication=()=>{
    // const logoGoogleUser=async ()=>{
    //     const {user} =await singInWithPopIpGoogle();
    //     const userDocRef=creatUserDocumentFromAuth(user);
    // }

    return (
       
        <div className='authentication-container'>
        <SignInForm/>
        <SignUpForm />
      </div>

        
            
         
    );
};


export default Authentication;