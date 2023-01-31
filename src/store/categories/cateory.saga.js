import {takeLatest,all,call,put}from 'redux-saga/effects';
import { getCategoriesAndDocumentsFromFirestore } from '../../utils/firebase/firebase.utils';
import { fetchCategoriesStart,fetchCategoriesFailed ,fetchCategoriesSuccess} from './category.action';
import { CATEGORIES_ACTION_TYPE } from './category.types';



export const fetchDategoriesAsyns=()=>async(dispatch)=>{
    dispatch(fetchCategoriesStart);

    
};

export function* fetchCategoriesAsync(){
    try{
        const categoriesArray=yield call(getCategoriesAndDocumentsFromFirestore,'categories');
        yield put(fetchCategoriesSuccess(categoriesArray));
       
    }catch(e){
        yield put(fetchCategoriesFailed,e);
    }
};

export function* onFetchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_LOADING,fetchCategoriesAsync);
};

export function* categoriesSaga(){
    yield all([call(onFetchCategories)]);
};