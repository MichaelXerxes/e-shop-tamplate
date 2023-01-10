import "./shop.styles.scss";
import SHOP_DATA from "../../shop-data.json";
import ProductCard from "../../components/product-card/product-card.component";
import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

const Shop = () => {
  const {categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment >
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;

const Trash = () => {
  SHOP_DATA.map(({ id, name, imageUrl, price }) => (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h4>Price: {price}</h4>
        <p>Buy Now</p>
      </div>
    </div>
  ));
  SHOP_DATA.map(({ product }) => (
    <ProductCard key={product.id} product={product} />
  ));
};
