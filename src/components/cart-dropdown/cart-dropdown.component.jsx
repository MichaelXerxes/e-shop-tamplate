import './cart-dropdown.styles.scss';
import { useContext,useEffect } from 'react';
import { CartContext } from '../../contexts/cart.context';
import ButtonC from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
const CartDropdown=()=>{
    const {cartItems}=useContext(CartContext);

   /* useEffect(() => {
        const count = cartItems.reduce(
          (total, cartItem) => total + cartItem.quantity,
          0
        );
        setCartItemCount(count);
      }, [cartItems]);*/

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item)=>(
                    <CartItem key={item.id} cartItem={item}/>
                ))

                }
            </div>
            <ButtonC buttonType='inverted'>Go to Checkout!</ButtonC> 
        </div>
    );
};


export default CartDropdown;