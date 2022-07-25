import React, { useState } from 'react';

const ItemCount = ({ stock }) => {
  const [contador, setContador] = useState(1);

  const changeNumber = (value) => {
    if ((value === 1 && !(contador >= stock)) || (value === -1 && contador > 1)) {
      setContador(contador + value);
    }
  };

  return (
    <>
      <div className="flex justify-center gap-4">
        <button onClick={() => changeNumber(-1)}>-</button>
        <p>{contador}</p>
        <button onClick={() => changeNumber(1)}>+</button>
      </div>
    </>
  );
};

export default ItemCount;
