import React from 'react';

const NavbarElem = ({ href, name }) => {
  const elemStyle = 'hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium block';
  return (
    <a href={href} className={elemStyle}>
      {name}
    </a>
  );
};

export default NavbarElem;
