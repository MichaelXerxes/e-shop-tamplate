import { USER_SOME_ACTION_TYPE } from "./user.types";

const INITIAL_STATE={
    currentUser:null,
    isLoading:false,
    error:null,
};

;
export const userReducerRedux=(state=INITIAL_STATE,action)=>{

    const {type,payload}=action;

    switch(type){
        case USER_SOME_ACTION_TYPE.SET_CURRENT_USER:
                return {
                    ...state,
                    currentUser:payload
                };
        case USER_SOME_ACTION_TYPE.SIGN_IN_SUCCESS:
                return {...state,currentUser:payload};
        case USER_SOME_ACTION_TYPE.SIGN_IN_FAILED:
        case USER_SOME_ACTION_TYPE.SIGN_UP_FAILED:
        case USER_SOME_ACTION_TYPE.SING_OUT_FAILED:
                return{...state,error:payload};
        case USER_SOME_ACTION_TYPE.GOOGLE_SIGN_IN_START:
                return{...state,currentUser:payload};
        case USER_SOME_ACTION_TYPE.EMAIL_SIGN_IN_START:
                return {...state,currentUser:payload};
        case USER_SOME_ACTION_TYPE.SING_OUT_SUCCESS:
                return{...state,currentUser:null};
        default:
            return state;
    }
};