import { compose,applyMiddleware} from "redux";
import { legacy_createStore as createStore} from 'redux'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootReducer } from "./root-reducer";
import logger from "redux-logger";


const loggerMiddleware=(store)=>(next)=>(action)=>{
    if(!action.type){
        return next(action);
    }
    next(action);
};

const persistConfig={
    key:'root',
    storage,
    blacklist:['user']
}

 const presisetedReducer=persistReducer(persistConfig,RootReducer);

const middleWares=[process.env.NODE_ENV==='development'&& logger].filter(Boolean);

const composeEnhancers=compose(applyMiddleware(...middleWares));

export const store=createStore(presisetedReducer,undefined,composeEnhancers);

export const presistor=persistStore(store);
