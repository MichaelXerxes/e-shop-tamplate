import { createContext, useState, useEffect } from "react";
import {getCategoriesAndDocumentsFromFirestore} from "../utils/fire-base/fire-base.utils.js";


export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMaps] = useState({});



  useEffect(() => {
    
    const getCategoriesMap = async () => {
      const categoryMap =await getCategoriesAndDocumentsFromFirestore('categories');
    
      setCategoriesMaps(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap};
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
