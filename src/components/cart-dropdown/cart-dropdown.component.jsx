import {CartDropdownnConatainer,EmptyMessage,CartItemDiv} from'./cart-dropdown.styles.jsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector';

import ButtonC from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
const CartDropdown=()=>{
    const cartItems=useSelector(selectCartItems);
   

    const navigate=useNavigate();

    const goToChekOutHandler=()=>{
        navigate('/checkout');
    };

    return(
        <CartDropdownnConatainer>
            <CartItemDiv>
                {
                    cartItems.length ? (cartItems.map((item)=>(
                        <CartItem key={item.id} cartItem={item}/>
                    ))):(
                        <EmptyMessage>You Cart is Epmty!</EmptyMessage>
                    )
                }
                
            </CartItemDiv>
            <ButtonC buttonType='inverted' onClick={goToChekOutHandler}>Go to Checkout!</ButtonC> 
        </CartDropdownnConatainer>
    );
};


export default CartDropdown;