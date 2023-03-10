import { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangeListener,
  creatUserDocumentFromAuth,
} from "../utils/fire-base/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";
// actual value
export const UserContext = createContext({
  currentUser: null,
  setCurrenUser: () => null,
});

 const USER_ACTION_TYPE = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};
const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const { currentUser } = state;

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user));
  };
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unSubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        creatUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unSubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
