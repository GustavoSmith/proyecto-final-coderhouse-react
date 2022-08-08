import React, { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isProductInCart = cart.find((productInCart) => productInCart.id === product.id);
    if (isProductInCart) {
      const newArray = cart.map((productInCart) => {
        if (productInCart.id === product.id) {
          return {
            ...productInCart,
            quantity: productInCart.quantity + product.quantity,
          };
        } else {
          return productInCart;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const clear = () => setCart([]);

  const removeFromCart = (id) => setCart(cart.filter((product) => product.id !== id));

  return <CartContext.Provider value={{ cart, addToCart, clear, removeFromCart }}>{children}</CartContext.Provider>;
};

export default CartProvider;
