import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data.js";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocumentsFromFirestore,
} from "../utils/firebase/firebase.utils.js";


export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMaps] = useState({});

  /*useEffect(()=>{
    addCollectionAndDocuments('categories',SHOP_DATA);
  },[]);*/ // just one for now.Data stored

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap =await getCategoriesAndDocumentsFromFirestore('categories');
     // console.log('Should be Object');
      //console.log(categoryMap);
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
