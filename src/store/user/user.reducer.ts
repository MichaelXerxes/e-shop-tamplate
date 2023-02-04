import {AnyAction} from 'redux';
import { USER_SOME_ACTION_TYPE } from "./user.types";
import { signInFailed, signOutFailed, signUpFailed, signInSuccess, signOutSuccess} from "./user.action";
import { UserData } from '../../utils/fire-base/firebase.utils';

export type UserState={
        readonly currentUser:UserData|null;
        readonly isLoading:boolean;
        readonly error:Error|null;
};
const INITIAL_STATE:UserState={
    currentUser:null,
    isLoading:false,
    error:null,
};

;
export const userReducerRedux=(state=INITIAL_STATE,action:AnyAction)=>{

    if(signInSuccess.match(action)){
        return {...state, currentUser:action.payload};
    }
    if(signOutSuccess.match(action)){
        return {...state,currentUser:null}
    }
    if(signInFailed.match(action)||signUpFailed.match(action||signOutFailed.match(action))){
        return {...state,error:action.payload};
    }
        
     return state;
    
};