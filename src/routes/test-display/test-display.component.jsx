import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const TestDisplay = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h3>Hello Test</h3>
      <h1>{cartItems.length}</h1>
      {cartItems.map((item) => (
        <div>
          <h2>{item.name}</h2>
          <span>{item.id}</span>
        </div>
      ))}
    </div>
  );
};

export default TestDisplay;