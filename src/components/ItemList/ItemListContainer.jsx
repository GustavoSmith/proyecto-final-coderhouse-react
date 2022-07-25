import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import products from '../../utils/products.json';

const ItemListContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [listProducts, setListProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      });

      setListProducts(response);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  let content = 'Cargando...';

  if (!isLoading) {
    content = <ItemList dataProducts={listProducts} />;
  }

  return <div className="p-16 flex justify-center">{content}</div>;
};

export default ItemListContainer;
