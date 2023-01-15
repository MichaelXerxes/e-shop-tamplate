import { createContext, useState, useEffect,useReducer } from "react";
import { act } from "react-dom/test-utils";

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart:()=>{},
  cartItemCount: 0,
  cartTotal:0,
});


const INITIAL_STATE={
  isCartOpen: false,
  cartItems: [],
  cartItemCount: 0,
  cartTotal:0,
};

const CART_ACTION_TYPE={
  SET_CART_ITEMS:'SET_CART_ITEMS',
  SET_IS_CART_OPEN:'SET_IS_CART_OPEN',
};

const cartReducer=(state,action)=>{
  const {type,payload}=action;

  switch(type){
    case CART_ACTION_TYPE.SET_CART_ITEMS:
    return {
      ...state,
      ...payload,
    }
    case CART_ACTION_TYPE.SET_IS_CART_OPEN:
    return {
      ...state,
      isCartOpen:payload,
    }
    default:
      throw new Error(`UNhandled type of ${type} in cartReducer`)
  }
};


const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

    if(existingCartItem.quantity===1){
      return cartItems.filter(cartItem=>cartItem.id!==cartItemToRemove.id)
    }
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }

};
const clearCartItem=(cartItems,cartItemToClear)=>{
  return cartItems.filter(cartItem=>cartItem.id!==cartItemToClear.id);
};

export const CartProvider = ({ children }) => {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [cartItemCount, setCartItemCount] = useState(0);
  // const [cartTotal, setCartTotal] = useState(0);

  // useEffect(() => {
  //   const count = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity,
  //     0
  //   );
  //   setCartItemCount(count);
  // }, [cartItems]);

  // useEffect(() => {
  //   const newCartTotal= cartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity * cartItem.price,
  //     0
  //   );
  //   setCartTotal(newCartTotal);
  // }, [cartItems]);

  const [{cartItems,isCartOpen,cartItemCount,cartTotal},dispatch]=useReducer(cartReducer,INITIAL_STATE);
  
  // Reducer
  const updateCartItemReducer=(newCartItems)=>{
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal=newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch({type:'SET_CART_ITEMS',payload:{cartItems:newCartItems, cartTotal:newCartTotal,cartItemCount:newCartCount}});
  };

  const addItemToCart = (product) => {
    const newCartItems=addCartItem(cartItems, product);
    updateCartItemReducer(newCartItems);
  };

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems=removeCartItem(cartItems, cartItemToRemove);
    updateCartItemReducer(newCartItems);
  };

  const clearItemFromCart=(clearItemToRemove)=>{
    const newCartItems=clearCartItem(cartItems, clearItemToRemove);
    updateCartItemReducer(newCartItems);
  };

  const setIsCartOpen=(bool)=>{
    dispatch({tyoe:'SET_IS_CART_OPEN', payload:bool});
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemCount,
    cartTotal,
    removeItemFromCart,
    clearItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
