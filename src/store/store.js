import { compose,applyMiddleware} from "redux";
import { legacy_createStore as createStore} from 'redux'
import { persistStore, persistReducer } from "redux-persist";
import { RootReducer } from "./root-reducer";


const loggerMiddleware=(store)=>(next)=>(action)=>{
    if(!action.type){
        return next(action);
    }
    next(action);
};

const persistConfig={
    
}

const middleWares=[loggerMiddleware];

const composeEnhancers=compose(applyMiddleware(...middleWares));

export const store=createStore(RootReducer,undefined,composeEnhancers);
