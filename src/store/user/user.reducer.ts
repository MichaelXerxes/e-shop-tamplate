import {AnyAction} from 'redux';
import { USER_SOME_ACTION_TYPE } from "./user.types";
import { signInFailed, signOutFailed, signUpFailed, signInSuccess, signOutSuccess, setCurrenUser} from "./user.action";
import { UserData } from '../../utils/fire-base/firebase.utils';

export type UserState = {
        readonly currentUser: UserData | null;
        readonly isLoading: boolean;
        readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
        currentUser: null,
        isLoading: false,
        error: null,
};

export const userReducer = (
        state = INITIAL_STATE,
        action = {} as AnyAction
) => {
        if(setCurrenUser.match(action)){
                return {...state,currentUser:action.payload};
                }

        if (signInSuccess.match(action)) {
        return { ...state, currentUser: action.payload };
        }

        if (signOutSuccess.match(action)) {
        return { ...state, currentUser: null };
        }

        if (
        signOutFailed.match(action) ||
        signInFailed.match(action) ||
        signUpFailed.match(action)
        ) {
        return { ...state, error: action.payload };
        }

        return state;
};