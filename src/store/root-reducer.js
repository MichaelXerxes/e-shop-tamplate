import { combineReducers } from "redux";
import { userReducerRedux } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";
export const RootReducer=combineReducers({
        user:userReducerRedux,
        categories:categoriesReducer,
        cart:cartReducer,
});