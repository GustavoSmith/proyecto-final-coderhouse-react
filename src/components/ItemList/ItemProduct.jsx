import React from 'react';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';

const ItemProduct = ({ product }) => {
  const { id, title, image, price } = product;

  return (
    <div className="mx-4 p-2 flex flex-col items-center sm:justify-between sm:h-[430px] border-blue-300 border-4 rounded-3xl">
      <img
        src={`/proyecto-final-coderhouse-react/assets/products/${image}`}
        alt={`Imagen ${title}`}
        className="w-96 md:w-64"
      />
      <div className="flex flex-col items-center border-t-[1px] border-gray-300 font-semibold">
        <p>{title}</p>
        <p>$ {price}</p>
        <Link to={`/item/${id}`}>
          <button className="rounded-full border border-black border-solid px-6 my-2">Ver detalles</button>
        </Link>
        <ItemCount product={product} />
      </div>
    </div>
  );
};

export default ItemProduct;
