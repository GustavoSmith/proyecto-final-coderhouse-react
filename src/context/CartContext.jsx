import React, { useState, createContext } from 'react';

export const CartContext = createContext();

const getInitialState = () => {
  const productsInCart = localStorage.getItem('productsInCart');
  return productsInCart ? JSON.parse(productsInCart) : [];
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getInitialState());

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
    localStorage.setItem('productsInCart', JSON.stringify(cartArray));
  };

  const clear = () => {
    setCart([]);
    localStorage.removeItem('productsInCart');
  };

  const removeFromCart = (id) => {
    const modifiedCart = cart.filter((product) => product.id !== id);
    setCart(modifiedCart);
    localStorage.setItem('productsInCart', JSON.stringify(modifiedCart));
  };

  const totalPrice = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, clear, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
