import './product-card.styles.scss';
import ButtonC from '../button/button.component';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/cart.context';

const ProductCard=({product})=>{
    const {name,price,imageUrl}=product;
    const { addItemToCart}=useContext(CartContext);
    

   

    const AddProductToCart=()=> {

        addItemToCart(product);
    }
    

    return(
        <div className='product-card-container'>
         

            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <ButtonC buttonType='inverted' onClick={AddProductToCart}>Add to card</ButtonC>
            
            
               
          
        </div>
    );
};


export default ProductCard;