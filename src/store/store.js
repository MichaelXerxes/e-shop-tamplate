import { compose,applyMiddleware} from "redux";
import { legacy_createStore as createStore} from 'redux'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootReducer } from "./root-reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { createSagaMiddleware, rootSaga } from "./root-saga";



const loggerMiddleware=(store)=>(next)=>(action)=>{
    if(!action.type){
        return next(action);
    }
    next(action);
};

const persistConfig={
    key:'root',
    storage,
    blacklist:['user'],
    whitelist:['cart'],
};

const sagaMiddleware=createSagaMiddleware();

// const thunkMiddleware=(store)=>(next)=>(action)=>{
//     if(action==='function'){
//         action(dispatch);
//     }
// };
 const presisetedReducer=persistReducer(persistConfig,RootReducer);

const middleWares=[process.env.NODE_ENV!=='production+'&& logger,sagaMiddleware].filter(Boolean);

const composeEnhancers=compose(applyMiddleware(...middleWares));

export const store=createStore(presisetedReducer,undefined,composeEnhancers);

sagaMiddleware.run(rootSaga);

export const presistor=persistStore(store);
