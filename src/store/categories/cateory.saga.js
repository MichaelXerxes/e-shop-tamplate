import {takeLatest,all,call,put}from 'redux-saga/effects';
import { getCategoriesAndDocumentsFromFirestore } from '../../utils/firebase/firebase.utils';
import { fetchCategoriesStart,fetchCategoriesFaild ,fetchCategoriesSuccess} from './category.action';
import { CATEGORIES_ACTION_TYPE } from './category.types';



export const fetchDategoriesAsyns=()=>async(dispatch)=>{
    dispatch(fetchCategoriesStart);

    try{
        const categoriesArray=await getCategoriesAndDocumentsFromFirestore('categories');
        dispatch(fetchCategoriesSuccess(categoriesArray));
    }catch(e){
        dispatch(fetchCategoriesFaild,e);
    }
} 