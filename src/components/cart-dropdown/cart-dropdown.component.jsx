import './cart-dropdown.styles.scss';
import ButtonC from '../button/button.component';

const CartDropdown=()=>{


    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>

            </div>
            <ButtonC buttonType='inverted'>Go to Checkout!</ButtonC> 
        </div>
    );
};


export default CartDropdown;