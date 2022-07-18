import React from 'react';
import { Navbar, Footer, ItemListContainer } from './components';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer text="Bienvenido a Smith PC's" />
      <h1>Smith Store</h1>
      <Footer />
    </div>
  );
};

export default App;
