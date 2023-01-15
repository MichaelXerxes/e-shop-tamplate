import { combineReducers } from "redux";
import { userReducerRedux } from "./user/user.reducer";
export const RootReducer=combineReducers({
        user:userReducerRedux,
});