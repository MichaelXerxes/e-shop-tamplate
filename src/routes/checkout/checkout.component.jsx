import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckOut = () => {
  const { cartItems,addItemToCart,removeItemFromCart } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <h1>It`s the Chekout page !</h1>
      <div>
        {cartItems.map((cartItem) => {
            const {name,quantity,id}=cartItem
          return <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <br/>
            <span onClick={()=>removeItemFromCart(cartItem)}>decrement</span>
            <span onClick={()=>addItemToCart(cartItem)}>increment</span>
          </div>;
        })}
      </div>
    </div>
  );
};

export default CheckOut;
