import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ItemCount = ({ product }) => {
  const [contador, setContador] = useState(1);
  const { addToCart } = useContext(CartContext);

  const [purchaseFlag, setPurchaseFlag] = useState(false);

  const finishPurchase = () => {
    addToCart({ ...product, quantity: contador });
    setPurchaseFlag(true);
  };

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
        {purchaseFlag ? (
          <Link to={'/cart'}>
            <button className="rounded-md border border-black border-solid px-6 my-2">Finalizar compra</button>
          </Link>
        ) : (
          <button onClick={finishPurchase} className="rounded-md border border-black border-solid px-6 my-2">
            Comprar
          </button>
        )}
      </div>
    </>
  );
};

export default ItemCount;
