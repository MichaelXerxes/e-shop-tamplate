import { takeLatest, put, all, call } from "redux-saga/effects";

import { USER_SOME_ACTION_TYPE } from "./user.types";

import { signInSuccess, signInFailed } from "./user.action";
import { isExportSpecifier } from "typescript";
import { getCurrentUser ,creatUserDocumentFromAuth} from "../../utils/fire-base/fire-base.utils";
import { signInWithPopup } from "firebase/auth";

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
}

export function* onGoogleSignInStart(){
    yield takeLatest(USER_SOME_ACTION_TYPE.GOOGLE_SIGN_IN_START,signInWithGoogle);
}


export function* userSagas() {
  yield all([call(onCheckUserSession),call(onGoogleSignInStart)]);
};
