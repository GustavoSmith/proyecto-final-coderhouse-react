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

  const purchaseBtnStyle = 'rounded-xl border border-black border-solid px-6 my-2';

  return (
    <>
      <div className="flex justify-between border bg-blue-600 text-white font-medium rounded-full w-32 px-4">
        <button onClick={() => changeNumber(-1)}>-</button>
        <p>{contador}</p>
        <button onClick={() => changeNumber(1)}>+</button>
      </div>
      {purchaseFlag ? (
        <Link to={'/cart'}>
          <button className={purchaseBtnStyle}>Finalizar compra</button>
        </Link>
      ) : (
        <button onClick={finishPurchase} className={purchaseBtnStyle}>
          Agregar al carrito
        </button>
      )}
    </>
  );
};

export default ItemCount;
