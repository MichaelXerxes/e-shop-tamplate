import { createSelector } from "reselect";
import { CategoriesState } from "./category.reducer";
import { CategoryMap } from "./category.types";
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


