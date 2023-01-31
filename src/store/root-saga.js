import {all,call} from 'redux-saga/effects';
import { categoriesSaga } from './categories/cateory.saga';

export function* rootSaga(){
    yield all([call(categoriesSaga)]);
};

export function * createSagaMiddleware(){

};