import React, { useState, useRef } from 'react';
import { Transition } from '@headlessui/react';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo from '../Icons/MainLogo';
import NavbarElem from './NavbarElem';
import CartWidget from './CartWidget';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const sectionData = [
    { name: 'Todos los componentes', href: '#' },
    { name: 'Ofertas', href: '#' },
    { name: 'Armá tu PC', href: '#' },
    { name: 'Contacto', href: '#' },
  ];
  const navElems = [];

  sectionData.map((e) => navElems.push(<NavbarElem name={e.name} href={e.href} key={e.name} />));

  return (
    <>
      <div>
        <nav className="bg-gray-800">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-2 sm:px-3 md:px-6 lg:px-8">
            <a href="#" className="inline-flex items-center py-2">
              <Logo width={60} height={60} />
              <h2 className="text-white">Smith PCs</h2>
            </a>
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-center gap-4">
                    {navElems}
                    <CartWidget />
                  </div>
                </div>
              </div>
              <div className="mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:bg-gray-900"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <IconContext.Provider value={{ size: '1.5rem' }}>
                    {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                  </IconContext.Provider>
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navElems}
                <CartWidget mobile="true" />
              </div>
            </div>
          </Transition>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
