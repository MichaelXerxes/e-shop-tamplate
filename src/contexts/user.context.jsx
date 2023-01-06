import { createContext,useState } from "react";

// actual value
export const UserContext=createContext({
    currentUser:null,
    setCurrenUser:()=>null,
});

export const UserProvider=({children})=>{
    const[currentUser,setCurrenUser]=useState(null);
    const value={currentUser,setCurrenUser};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

};

