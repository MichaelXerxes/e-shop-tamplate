export const selectCategoriesMap = (state) => {
  const categoriesMap = state.categories.categories
  .reduce((acc, category) => {
    const { title,items } = category;
    title.toLowerCase();
    acc[title] = items;

    return acc;
  }, {});
  return categoriesMap;
};
