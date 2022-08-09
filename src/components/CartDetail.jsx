import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartDetail = () => {
  const { cart, removeFromCart, clear } = useContext(CartContext);

  const checkout = () => {
    // TODO: Verificar si el stock de los productos satisfacen el pedido de compra
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    alert(`Total: $${totalPrice}. Muchas gracias!`);
    clear();
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-full min-h-[80vh] bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-4">
            <h1 className="font-semibold text-2xl">{cart.length} productos</h1>
          </div>
          <div className="flex my-8 gap-4">
            <h3 className="font-semibold text-gray-500 text-xs w-2/5 text-center">PRODUCTO</h3>
            <h3 className="font-semibold text-gray-500 text-xs w-1/5 text-center">PRECIO</h3>
            <h3 className="font-semibold text-gray-500 text-xs w-1/5 text-center">CANTIDAD</h3>
            <h3 className="font-semibold text-gray-500 text-xs w-1/5 text-center">TOTAL</h3>
          </div>
          {cart.map((product) => (
            <div className="flex items-center py-5 gap-4 hover:bg-blue-100" key={product.id}>
              <div className="flex w-2/5">
                <div className="w-20 hidden sm:block">
                  <img className="h-24" src={`assets/products/${product.image}`} alt={product.title} />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm text-center">
                    <Link to={`/item/${product.id}`}>{product.title}</Link>
                  </span>
                  <div className="flex justify-end">
                    <button onClick={() => removeFromCart(product.id)} className="text-red-500 text-xs">
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">${product.price}</span>
              <span className="text-center w-1/5 font-semibold text-sm">{product.quantity}</span>
              <span className="text-center w-1/5 font-semibold text-sm">${product.price * product.quantity}</span>
            </div>
          ))}
          <Link to="/" className="font-semibold text-blue-600 text-sm mt-10">
            Volver a la tienda
          </Link>
          <div className="text-sm text-orange-500">
            <button onClick={clear}>Limpiar</button>
          </div>
          <div className="flex justify-end">
            <button
              onClick={checkout}
              className="border rounded-3xl px-8 py-3 bg-blue-600 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={cart.length === 0}
            >
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
