import { takeLatest, put, all, call } from "redux-saga/effects";

import { USER_SOME_ACTION_TYPE } from "./user.types";

import { signInSuccess, signInFailed } from "./user.action";
import { isExportSpecifier } from "typescript";
import { getCurrentUser ,creatUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth,additionalDetails){
    try{
        const userSnapshot=yield call(creatUserDocumentFromAuth,userAuth,additionalDetails);

    }catch(error){

    }
}

export function* isUserAuthenticated() {
  try {

    const userAuth = yield call(getCurrentUser);

    if(!userAuth) return;

  } catch (error) {

  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_SOME_ACTION_TYPE.CHECK_USER_SESSION);
}

export function* userSagas() {
  yield all([]);
}
