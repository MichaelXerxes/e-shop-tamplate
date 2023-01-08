import './shop.styles.scss';
import SHOP_DATA from '../../shop-data.json';
import ProductCard from '../../components/product-card/product-card.component';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/product.context';

const Shop=()=>{
  const {products}=useContext(ProductsContext)
    return (
      <div className='products-container'>
        { SHOP_DATA.map((product)=>(
    <ProductCard key={product.id} product={product} />
   ))};
      </div>
    );
  }

export default Shop;

const Trash=()=>{
  SHOP_DATA.map(({id,name,imageUrl,price})=>(
    <div className='category-container'>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className='category-body-container'>
      <h4>Price: {price}</h4>
      <p>Buy Now</p>
    </div>
  </div>
   ))
   SHOP_DATA.map(({product})=>(
    <ProductCard key={product.id} product={product} />
   ))
};