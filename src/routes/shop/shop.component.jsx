import "./shop.styles.scss";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { Route,Routes } from "react-router-dom";
import CategoriesPreviewPage from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { getCategoriesAndDocumentsFromFirestore } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesSuccess } from "../../store/categories/category.action";


const Shop = () => {
  const dispatch=useDispatch();
  useEffect(() => {
    
    const getCategoriesMap = async () => {
      //const categoryMap 
     const categoriesArray=await getCategoriesAndDocumentsFromFirestore('categories');
    
      dispatch(fetchCategoriesSuccess(categoriesArray));
    };
    getCategoriesMap();
  }, []);
  return (
   
    <Routes>
      <Route index element={<CategoriesPreviewPage/>}/>
      <Route path=":category" element={<Category/>}/>
    </Routes>
    
  );
};

export default Shop;


