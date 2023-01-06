import {singInWithPopIpGoogle,creatUserDocumentFromAuth, auth} from '../../utils/firebase/firebase.utils';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { async } from '@firebase/util';
import SignInForm from '../sign-in/sign-in-form.component';
import SignUpForm from '../sign-up/sign-up-form.component';

const Authentication=()=>{

   /* useEffect( ()=>{
      const  getResponse=async() =>{
       const response=await getRedirectResult(auth);
       if(response){
        const userDocRef=await creatUserDocumentFromAuth(response.user);
       }
       };
        
    },[]);*/


    const logoGoogleUser=async ()=>{
        const {user} =await singInWithPopIpGoogle();
        const userDocRef=creatUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In</h1>
          {/* <button  onClick={logoGoogleUser}>
            Sign In with PopUp Google
    </button>*/}
            <SignInForm/>
            <SignUpForm/>
        </div>
    );
};



export default Authentication;