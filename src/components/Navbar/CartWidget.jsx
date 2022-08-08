import React from 'react';
import { IconContext } from 'react-icons';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CartWidget = ({ mobile }) => {
  return (
    <Link to="/cart">
      <button className={mobile ? 'ml-2' : 'ml-8'}>
        <IconContext.Provider value={{ size: '2rem', color: 'white' }}>
          <BsCart2 />
        </IconContext.Provider>
      </button>
    </Link>
  );
};

export default CartWidget;
