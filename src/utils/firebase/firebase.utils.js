import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,signInWithRedirect,
        signInWithPopup,GoogleAuthProvider, 
        EmailAuthCredential,createUserWithEmailAndPassword,
        signInWithEmailAndPassword,signOut,
        onAuthStateChanged} from 'firebase/auth';

import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyD1Cslwd4B9mNkiIICGY1OLtlEF9WqyHWU",
  authDomain: "e-shop-tamplate-new.firebaseapp.com",
  projectId: "e-shop-tamplate-new",
  storageBucket: "e-shop-tamplate-new.appspot.com",
  messagingSenderId: "121217583242",
  appId: "1:121217583242:web:602474f3bb7116c9d6c573",
  measurementId: "G-N8PY26CRZF"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider =new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});
export const auth=getAuth();
export const singInWithPopIpGoogle=()=> signInWithPopup(auth,provider);
export const signInWithGoogleRedirect=()=>signInWithGoogleRedirect(auth,provider);

export const db=getFirestore();
export const creatUserDocumentFromAuth=async (userAuth,additionalInformation={})=>{
    if(!userAuth) return;

    //
    const userDocRef=doc(db,'users',userAuth.uid);


    const userSnapshot=await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName,email}=userAuth;
        const creatAt=new Date();
        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                creatAt,
                ...additionalInformation,

             } );
        }catch(error){

        }
    }
};


export const createAuthUserWithEmAndPass=async(email,password)=>{
    if(!email|| !password) return;


    createUserWithEmailAndPassword(auth,email,password);
};


export const signInAuthUserWithEmAndPass=async(email,password)=>{
    if(!email|| !password) return;


    signInWithEmailAndPassword(auth,email,password);
};

export const singOutUser=async ()=>await signOut(auth);

export const onAuthStateChangeListener=(callback)=>
    onAuthStateChanged(auth,callback);