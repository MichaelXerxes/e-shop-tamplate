import { compose,applyMiddleware,Middleware} from "redux";
import { legacy_createStore as createStore} from 'redux'
import { persistStore, persistReducer,PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootReducer } from "./root-reducer"; 
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

//import thunk from "redux-thunk";
import {  rootSaga } from "./root-saga";

export type RootState=ReturnType<typeof RootReducer>; 

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  
  type ExtendedPersistConfig = PersistConfig<RootState> & {
    whitelist: (keyof RootState)[];
  };
  
  const persistConfig: ExtendedPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
  };
  
  const sagaMiddleware = createSagaMiddleware();
  
  const persistedReducer = persistReducer(persistConfig, RootReducer);
  
  const middleWares = [
    process.env.NODE_ENV !== 'production' && logger,
    sagaMiddleware,
  ].filter((middleware): middleware is Middleware => Boolean(middleware));
  
  const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
      window &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  
  const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
  
  export const store = createStore(
    persistedReducer,
    undefined,
    composedEnhancers
  );
  
  sagaMiddleware.run(rootSaga);
  
  export const persistor = persistStore(store);
