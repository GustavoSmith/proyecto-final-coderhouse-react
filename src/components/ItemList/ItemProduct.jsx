import React from 'react';
import ItemCount from './ItemCount';

const ItemProduct = ({ data }) => {
  const { title, image, price, stock } = data;

  return (
    <div className="mx-4">
      <img src={`/assets/${image}`} alt="Imagen producto" />
      <div className="flex flex-col items-center">
        <p>{title}</p>
        <p>$ {price}</p>
        <ItemCount stock={stock} />
        <button className="rounded-md border border-black border-solid px-4 my-4">Ver detalles</button>
        <button className="rounded-md border border-black border-solid px-4">Comprar</button>
      </div>
    </div>
  );
};

export default ItemProduct;
