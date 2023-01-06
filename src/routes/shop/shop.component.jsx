import './shop.styles.scss';
import SHOP_DATA from '../../shop-data.json';


const Shop=()=>{
    return (
      <div>
        {SHOP_DATA.map(({id,name,imageUrl,price})=>(
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
        ))};
      </div>
    );
  }

export default Shop;