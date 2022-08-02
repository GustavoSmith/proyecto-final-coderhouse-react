import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../utils/products.json';
import NotFound from '../NotFound';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  let { prodId } = useParams();
  const prod = products.find((product) => product.id === Number(prodId));

  return prod ? <ItemDetail product={prod} /> : <NotFound />;
};

export default ItemDetailContainer;
