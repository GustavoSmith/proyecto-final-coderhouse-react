import React from 'react';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';

const ItemProduct = ({ product }) => {
  const { id, title, image, price } = product;

  return (
    <div className="mx-4 p-2 flex flex-col items-center sm:justify-between sm:h-[430px] border-blue-300 border-4 rounded-3xl">
      <img src={`/assets/products/${image}`} alt={`Imagen ${title}`} className="w-96 md:w-64" />
      <div className="flex flex-col items-center">
        <p>{title}</p>
        <p>$ {price}</p>
        <Link to={`/item/${id}`}>
          <button className="rounded-md border border-black border-solid px-4 my-2">Ver detalles</button>
        </Link>
        <ItemCount product={product} />
      </div>
    </div>
  );
};

export default ItemProduct;
