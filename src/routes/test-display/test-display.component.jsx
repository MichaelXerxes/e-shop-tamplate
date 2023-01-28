import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import { CartProvider } from "../../contexts/cart.context";


const TestDisplay = () => {
  const  cartItems  = useSelector(selectCartItems);

  return (
    <div>
      <h3>Hello Test</h3>
      <h1>{cartItems.length}</h1>
      {cartItems.map((item) => (
        <div id={item.id}>
          <h2>{item.name}</h2>
          <span>ID: {item.id}</span>
          <span> Price:{item.price}</span>
        </div>
      ))}
    </div>
  );
};

export default TestDisplay;
