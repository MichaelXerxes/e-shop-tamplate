import { combineReducers } from "redux";
import { userReducerRedux } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
export const RootReducer=combineReducers({
        user:userReducerRedux,
        categories:categoriesReducer,
});