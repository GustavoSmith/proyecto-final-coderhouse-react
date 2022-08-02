import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Navbar, ItemListContainer, ItemDetailContainer, NotFound, Footer } from './components';

const Routes = () =>
  useRoutes([
    { path: '/', element: <ItemListContainer /> },
    { path: '/category/:catId', element: <ItemListContainer /> },
    { path: '/item/:prodId', element: <ItemDetailContainer /> },
    { path: '*', element: <NotFound /> },
  ]);

const App = () => {
  return (
    <>
      <Navbar />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
