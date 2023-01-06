import { createContext,useState,useEffect } from "react";
import { onAuthStateChangeListener,singOutUser,creatUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// actual value
export const UserContext=createContext({
    currentUser:null,
    setCurrenUser:()=>null,
});

export const UserProvider=({children})=>{
    const[currentUser,setCurrenUser]=useState(null);
    const value={currentUser,setCurrenUser};
    
    useEffect(()=>{
        const unSubscribe=onAuthStateChangeListener((user)=>{
            if(user){
                creatUserDocumentFromAuth(user);
            }
            setCurrenUser(user);
        });

        return unSubscribe;
    },[]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

};

