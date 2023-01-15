import "./shop.styles.scss";
import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { Route,Routes } from "react-router-dom";
import CategoriesPreviewPage from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";


const Shop = () => {
  const {categoriesMap } = useContext(CategoriesContext);
  return (
   
    <Routes>
      <Route index element={<CategoriesPreviewPage/>}/>
      <Route path=":category" element={<Category/>}/>
    </Routes>
    
  );
};

export default Shop;


