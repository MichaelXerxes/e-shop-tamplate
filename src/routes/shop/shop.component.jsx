import "./shop.styles.scss";
import SHOP_DATA from "../../shop-data.json";
import ProductCard from "../../components/product-card/product-card.component";
import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
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

const Trash = () => {
 
  SHOP_DATA.map(({ product }) => (
    <ProductCard key={product.id} product={product} />
  ));
  
  /*<Fragment key={title}>
          <h2>{title.charAt(0).toUpperCase()+title.slice(1)}</h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            
          </div>
        </Fragment>
        <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products=categoriesMap[title];
        return (
            <CategoryPreview key={title} title={title} products={products}/>
        );
      })}
    </div>
        */
};
