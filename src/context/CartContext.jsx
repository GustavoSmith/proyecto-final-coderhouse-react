import React, { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const checkStock = (productInCart, product) => {
    if (productInCart.quantity + product.quantity > productInCart.stock) {
      alert(
        `No hay stock suficiente. La cantidad máxima permitida de este producto es de ${productInCart.stock} unidades.`
      );
      return productInCart;
    }
    return {
      ...productInCart,
      quantity: productInCart.quantity + product.quantity,
    };
  };

  const addToCart = (product) => {
    const isProductInCart = cart.find((productInCart) => productInCart.id === product.id);
    let cartArray = [];

    if (isProductInCart) {
      cartArray = cart.map((productInCart) =>
        productInCart.id === product.id ? checkStock(productInCart, product) : productInCart
      );
    } else {
      cartArray = [...cart, product];
    }
    setCart(cartArray);
  };

  const clear = () => setCart([]);

  const removeFromCart = (id) => setCart(cart.filter((product) => product.id !== id));

  return <CartContext.Provider value={{ cart, addToCart, clear, removeFromCart }}>{children}</CartContext.Provider>;
};

export default CartProvider;
