import { createSelector } from "reselect";

const selectCategoryReducer=(state)=>state.categories;

export const selectCategories=createSelector(
  [selectCategoryReducer],
  (categoriesSlice)=> categoriesSlice.categories
);

export const selectCategoriesMap =createSelector(
  [selectCategories],
  (categories)=>categories
  .reduce((acc, category) => {
    const { title,items } = category;
    title.toLowerCase();
    acc[title] = items;

    return acc;
  }, {})
) ;

// (state) => {
//   const categoriesMap = state.categories.categories
//   .reduce((acc, category) => {
//     const { title,items } = category;
//     title.toLowerCase();
//     acc[title] = items;

//     return acc;
//   }, {}); 
//   return categoriesMap;
// };
