import {ShoopingIcon,ItemCount,CartIconContainer} from'./cart-icon.styles.jsx';
import {ReactComponent as ShoppingIconSvg} from '../../assets/shopping-bag.svg';
import { useDispatch,useSelector } from 'react-redux';

import { selectCartCount, selectIsOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';



const CartIcon=()=>{
   // const {isCartOpen, setIsCartOpen,cartItemCount}=useContext(CartContext);

   const dispatch=useDispatch();
    const cartItemCount=useSelector(selectCartCount);
    const isCartOpen=useSelector(selectIsOpen);

    const toggleIsCartOpen=()=> dispatch(setIsCartOpen(!isCartOpen));
    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoopingIcon className='shopping-icon'/>
            <ItemCount >{cartItemCount}</ItemCount>
        </CartIconContainer>
    );
};



export default CartIcon;