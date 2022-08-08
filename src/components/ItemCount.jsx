import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemCount = ({ product }) => {
  const [contador, setContador] = useState(1);
  const { addToCart } = useContext(CartContext);

  const changeNumber = (value) => {
    if ((value === 1 && !(contador >= product.stock)) || (value === -1 && contador > 1)) {
      setContador(contador + value);
    }
  };

  return (
    <>
      <div>
        <div className="flex justify-center gap-4">
          <button onClick={() => changeNumber(-1)}>-</button>
          <p>{contador}</p>
          <button onClick={() => changeNumber(1)}>+</button>
        </div>
        <button
          onClick={() => addToCart({ ...product, quantity: contador })}
          className="rounded-md border border-black border-solid px-6 my-2"
        >
          Comprar
        </button>
      </div>
    </>
  );
};

export default ItemCount;
