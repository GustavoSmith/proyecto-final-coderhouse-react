import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Navbar, ItemListContainer, ItemDetailContainer, CartDetail, NotFound, Footer } from './components';
import CartProvider from './context/CartContext';

const Routes = () =>
  useRoutes([
    { path: '/', element: <ItemListContainer /> },
    { path: '/category/:catId', element: <ItemListContainer /> },
    { path: '/item/:prodId', element: <ItemDetailContainer /> },
    { path: '/cart', element: <CartDetail /> },
    { path: '*', element: <NotFound /> },
  ]);

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <Routes />
      <Footer />
    </CartProvider>
  );
};

export default App;
