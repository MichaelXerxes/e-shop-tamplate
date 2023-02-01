import { type } from "os";
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import {
  CATEGORIES_ACTION_TYPE,
  Category,
} from "./category.types";
//export  const setCategoriesMap=(categoriesMap )=>createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP, categoriesMap );

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_LOADING>;

export type FetchCategoriesSuccess =ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,Category[]>;

export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED,Error>;

export type CategoryAction=FetchCategoriesStart|FetchCategoriesSuccess|FetchCategoriesFailed;

export const fetchCategoriesStart =withMatcher( ():FetchCategoriesStart =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_LOADING));

export const fetchCategoriesSuccess =withMatcher(  (categoriesArray:Category[]):FetchCategoriesSuccess =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray));

export const fetchCategoriesFailed = withMatcher( (error:Error):FetchCategoriesFailed =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error));
