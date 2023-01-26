import { compose,applyMiddleware} from "redux";
import { legacy_createStore as createStore} from 'redux'
//import logger from "redux-logger";
import { RootReducer } from "./root-reducer";


const loggerMiddleware=(store)=>(next)=>(action)=>{
    if(!action.type){
        return next(action);
    }
    next(action);
};

const middleWares=[loggerMiddleware];

const composeEnhancers=compose(applyMiddleware(...middleWares));

export const store=createStore(RootReducer,undefined,composeEnhancers);
