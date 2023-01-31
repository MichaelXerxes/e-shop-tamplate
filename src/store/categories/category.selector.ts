import { type } from "os";
import { createSelector } from "reselect";
import { CategoriesState } from "./category.reducer";
import { CategoryMap } from "./category.types";

export type selectCategoryInititalState={

};
const selectCategoryReducer=(state):CategoriesState=>state.categories;

export const selectCategories=createSelector(
  [selectCategoryReducer],
  (categoriesSlice)=> categoriesSlice.categories
);

export const selectCategoriesMap =createSelector(
  [selectCategories],
  (categories):CategoryMap=>categories
  .reduce((acc, category) => {
    const { title,items } = category;
    title.toLowerCase();
    acc[title] = items;

    return acc;
  }, {}as CategoryMap)
) ;

export const selectCategoriesIsLoading=createSelector(
  [selectCategoryReducer],
  (categoriesSlice)=>categoriesSlice.isLoading
);

