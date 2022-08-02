import React from 'react';
import ItemProduct from './ItemProduct';

const ItemList = ({ dataProducts }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-8 min-h-[40rem]">
      {dataProducts.map((prod) => (
        <ItemProduct key={prod.id} data={prod} />
      ))}
    </section>
  );
};

export default ItemList;
