import { takeLatest, put, all, call } from "redux-saga/effects";

import { USER_SOME_ACTION_TYPE } from "./user.types";

import { signInSuccess, signInFailed, signUpFailed, signUpSuccess, signOutSuccess, signOutFailed } from "./user.action";
import { isExportSpecifier } from "typescript";
import { getCurrentUser ,creatUserDocumentFromAuth, signInAuthUserWithEmAndPass, createAuthUserWithEmAndPass, singOutUser} from "../../utils/fire-base/firebase.utils";
import { signInWithPopup } from "firebase/auth";
import { createAction } from "../../utils/reducer/reducer.utils";

export function* getSnapshotFromUserAuth(userAuth,additionalDetails){
    try{
        const userSnapshot=yield call(creatUserDocumentFromAuth,userAuth,additionalDetails);
        yield put(signInSuccess({id:userSnapshot.id,...userSnapshot.data()}));
    }catch(error){
        yield put(signInFailed(error))
    }
};

export function* isUserAuthenticated() {
  try {

    const userAuth = yield call(getCurrentUser);

    if(!userAuth) return;

    yield call(getSnapshotFromUserAuth,userAuth);
  } catch (error) {

  }
};

export function* onCheckUserSession() {
    yield takeLatest(USER_SOME_ACTION_TYPE.CHECK_USER_SESSION,isUserAuthenticated);
};

export function* signInWithGoogle(){
    try{
     const {user} =  yield call(signInWithPopup);
     yield call(getSnapshotFromUserAuth,user);
    }catch(e){
        yield put(signInFailed(e));
    }
};

export function* onGoogleSignInStart(){
    yield takeLatest(USER_SOME_ACTION_TYPE.GOOGLE_SIGN_IN_START,signInWithGoogle);
};

export function* signInWithEmail({payload:{email,password}}){
    try{
        const {user}=yield call(signInAuthUserWithEmAndPass,email,password);
        yield call(getSnapshotFromUserAuth,user);
    }catch(error){
        yield put(signInFailed(error));
    }
};

export function* onEmailSignInStart(){
    yield takeLatest(USER_SOME_ACTION_TYPE.EMAIL_SIGN_IN_START,signInWithEmail);
};

export function* signUp({payload:{email,password,displayName}}){
    try{
        const {user}=yield call(createAuthUserWithEmAndPass,email,password);
        yield put(signUpSuccess(user,{displayName}));
    }catch(e){
        yield call(signUpFailed,e);
    }
};

export function* onSignUpStart(){
    yield takeLatest(USER_SOME_ACTION_TYPE.SIGN_UP_START,signUp);
};

export function* signInAfterSignUp({payload:{user,additionalDetails}}){
    yield call(getSnapshotFromUserAuth,user,additionalDetails);
};

export function* onSignUpSuccess(){
    yield takeLatest(USER_SOME_ACTION_TYPE.SIGN_UP_SUCCESS,signInAfterSignUp);
};

export function* signOut(){
    try{
        yield call(singOutUser);
        yield put(signOutSuccess());
    }catch(e){
        yield put(signOutFailed,e);
    }
}
export function* onSignOut(){
    yield takeLatest(USER_SOME_ACTION_TYPE.SIGN_OUT_START,signOut);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),

    ]);
};
