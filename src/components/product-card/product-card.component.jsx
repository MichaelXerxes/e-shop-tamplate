import './product-card.styles.scss';
import ButtonC from '../button/button.component';
import {  useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard=({product})=>{
    const {name,price,imageUrl}=product;
    const dispatch=useDispatch();

    const cartItems=useSelector(selectCartItems);
    const  addProductToCart=()=>dispatch(addItemToCart(cartItems,product));
    

   

    // const AddProductToCart=()=> {

    //     addItemToCart(product);
    // }
    

    return(
        <div className='product-card-container'>
         

            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <ButtonC buttonType='inverted' onClick={addProductToCart}>Add to card</ButtonC>
            
            
               
          
        </div>
    );
};


export default ProductCard;