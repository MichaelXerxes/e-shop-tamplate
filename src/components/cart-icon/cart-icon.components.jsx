import {ShoopingIcon,ItemCount,CartIconContainer} from'./cart-icon.styles.jsx';
import {ReactComponent as ShoppingIconSvg} from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


const CartIcon=()=>{
    const {isCartOpen, setIsCartOpen,cartItemCount}=useContext(CartContext);
    const toggleIsCartOpen=()=>setIsCartOpen(!isCartOpen);
    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoopingIcon className='shopping-icon'/>
            <ItemCount >{cartItemCount}</ItemCount>
        </CartIconContainer>
    );
};



export default CartIcon;