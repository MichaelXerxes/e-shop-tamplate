import { createAction,withMatcher ,Action,ActionWithPayload} from "../../utils/reducer/reducer.utils"
import { cartReducer } from "../cart/cart.reducer";
import { USER_SOME_ACTION_TYPE } from "./user.types";
import { UserData,AdditionalInformation } from "../../utils/fire-base/firebase.utils";
import { type } from "os";
import { User } from "firebase/auth";

export type CheckUserSession=Action<USER_SOME_ACTION_TYPE.CHECK_USER_SESSION>;
export type GoogleSignInStart=Action<USER_SOME_ACTION_TYPE.GOOGLE_SIGN_IN_START>;
export type SetCurrentUser=ActionWithPayload<USER_SOME_ACTION_TYPE.SET_CURRENT_USER,UserData>;
export type EmailSignInStart=ActionWithPayload<USER_SOME_ACTION_TYPE.EMAIL_SIGN_IN_START,{email:string,password:string}>;
export type SignUpStart=ActionWithPayload<USER_SOME_ACTION_TYPE.SIGN_UP_START,{email:string,password:string,displayName:string}>;
export type SignInSuccess=ActionWithPayload<USER_SOME_ACTION_TYPE.SIGN_IN_SUCCESS,UserData>;
export type SignInFailed=ActionWithPayload<USER_SOME_ACTION_TYPE.SIGN_IN_FAILED,Error>;
export type SignUpFailed=ActionWithPayload<USER_SOME_ACTION_TYPE.SIGN_UP_FAILED,Error>;
export type SignUpSuccess=ActionWithPayload<USER_SOME_ACTION_TYPE.SIGN_UP_SUCCESS,{user:User;additionalDetails:AdditionalInformation}>;
export type SignOutSuccess=Action<USER_SOME_ACTION_TYPE.SING_OUT_SUCCESS>;
export type SignOutFailed=ActionWithPayload<USER_SOME_ACTION_TYPE.SING_OUT_FAILED,Error>;
export type SignOutStart=Action<USER_SOME_ACTION_TYPE.SIGN_OUT_START>;




export  const setCurrenUser=withMatcher( (user:UserData ):SetCurrentUser=>createAction(USER_SOME_ACTION_TYPE.SET_CURRENT_USER,user));


export const checkUserSession=withMatcher(():CheckUserSession=>createAction(USER_SOME_ACTION_TYPE.CHECK_USER_SESSION));

export const  googleSIgnInStart=withMatcher(():GoogleSignInStart=>createAction(USER_SOME_ACTION_TYPE.GOOGLE_SIGN_IN_START));

export const emailSignInStart=withMatcher((email:string,password:string):EmailSignInStart=>createAction(USER_SOME_ACTION_TYPE.EMAIL_SIGN_IN_START,{email,password}));

export const signInSuccess=withMatcher((user:UserData):SignInSuccess=>createAction(USER_SOME_ACTION_TYPE.SIGN_IN_SUCCESS,user));

export const signInFailed=withMatcher((error:Error):SignInFailed=>createAction(USER_SOME_ACTION_TYPE.SIGN_IN_FAILED,error));

export const signUpStart=withMatcher((email:string,password:string,displayName:string):SignUpStart=>
        createAction(USER_SOME_ACTION_TYPE.SIGN_UP_START,{email,password,displayName}));

export const signUpSuccess=withMatcher((user:User,additionalDetails:AdditionalInformation):SignUpSuccess=>
        createAction(USER_SOME_ACTION_TYPE.SIGN_UP_SUCCESS,{user,additionalDetails}));

export const signUpFailed=withMatcher((error:Error):SignUpFailed=>createAction(USER_SOME_ACTION_TYPE.SIGN_UP_FAILED,error));

export const signOutStart=withMatcher(():SignOutStart=>createAction(USER_SOME_ACTION_TYPE.SIGN_OUT_START));
export const signOutSuccess=withMatcher(():SignOutSuccess=>createAction(USER_SOME_ACTION_TYPE.SING_OUT_SUCCESS));
export const signOutFailed=withMatcher((error:Error):SignOutFailed=>createAction(USER_SOME_ACTION_TYPE.SING_OUT_FAILED,error));
