import { CATEGORIES_ACTION_TYPE, Category } from "./category.types";
import { CategoryAction } from "./category.action";

export type CategoriesState={
    readonly categories:Category[];
    readonly isLoading:boolean;
    readonly error:Error|null;
};

export const CATEGORIES_INITIAL_STATE:CategoriesState={
    categories:[],
    isLoading:false,
    error:null,
};

export const categoriesReducer=(state=CATEGORIES_INITIAL_STATE,action={} as CategoryAction)=>{
    //const{type,payload}=action;
    switch(action.type){
        case CATEGORIES_ACTION_TYPE.SET_CATEGORIES:
            return {
                ...state,
                categories:action.payload,
            };
        case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_LOADING:
            return {
                ...state,
                isLoading:true
            };
        case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED:
            return {
                ...state,
                error:action.payload,
                isLoading:false
            };
        default:
            return state;
    }
}