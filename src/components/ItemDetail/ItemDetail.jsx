import React from 'react';
import ItemCount from '../ItemCount';

const ItemDetail = ({ product }) => {
  const { title, image, price, description, stock } = product;
  return (
    <section className="grid grid-rows-10 md:grid-cols-10 justify-center my-20 gap-8 min-h-[68vh]">
      <div className="row-span-7 md:col-span-6 w-[75vw] md:w-auto mx-auto">
        <img src={`/proyecto-final-coderhouse-react/assets/products/${image}`} alt={title} className="mx-auto" />
      </div>
      <div className="row-span-3 md:col-span-4 text-center flex flex-col gap-4 px-8 md:justify-evenly">
        <h1 className="text-3xl">{title}</h1>
        <div className="text-left">
          <p className="mb-4">{description}</p>
          <p className={stock > 5 ? 'text-green-600' : 'text-yellow-500'}>Quedan {stock} disponibles</p>
        </div>
        <div className="flex justify-between flex-col gap-4 sm:flex-row md:flex-col">
          <p className="text-2xl underline-">Precio: ${price}</p>
          <ItemCount product={product} />
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
