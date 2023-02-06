import { Middleware} from 'redux';
import { RootState } from '../store';

export const loggerMiddleware:Middleware<{},RootState>=
        (store)=>(next)=>(action)=>{
            if(!action.type){
                return next(action);
            }

            console.log('MH type',action.type);
            console.log('MH payload',action.payload);
            console.log('MH current State',action.getState());

            next(action);
            console.log('MH next-2 State',action.getState());

        };