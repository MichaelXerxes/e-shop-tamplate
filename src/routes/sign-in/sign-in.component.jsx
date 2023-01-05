import {singInWithPopIpGoogle,creatUserDocumentFromAuth, auth} from '../../utils/firebase/firebase.utils';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { async } from '@firebase/util';
const SignIn=()=>{

   /* useEffect( ()=>{
      const  getResponse=async() =>{
       const response=await getRedirectResult(auth);
       if(response){
        const userDocRef=await creatUserDocumentFromAuth(response.user);
       }
       };
        
    },[]);*/


    const logoGoogleUser=async ()=>{
        const response =await singInWithPopIpGoogle();
        creatUserDocumentFromAuth(response);
    }

    return (
        <div>
            <h1>Sign In</h1>
           <button  onClick={singInWithPopIpGoogle}>
            Sign In with PopUp Google
            </button>
            <h1>Sign In</h1>
        </div>
    );
};



export default SignIn;