import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Contacto from '../Contacto';
import products from '../../utils/products.json';
import { useParams } from 'react-router-dom';

const categoryFilter = (catId) => {
  const criteria = {
    all: () => true,
    ofertas: (product) => product.onSale === true,
    ultimasunidades: (product) => product.stock <= 5,
  };
  return criteria[catId] || criteria.all;
};

const ItemListContainer = () => {
  let { catId } = useParams();

  if (catId !== 'contacto') {
    const [isLoading, setIsLoading] = useState(true);
    const [listProducts, setListProducts] = useState([]);
    const [searchField, setSearchField] = useState('');
    const searchResults = (details) =>
      details.filter((prod) => prod.title.toLowerCase().includes(searchField.toLowerCase()));

    const handleChange = (e) => setSearchField(e.target.value);

    const getProducts = async () => {
      try {
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(products);
          }, 2000);
        });

        setListProducts(response);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    };

    useEffect(() => {
      getProducts();
      setSearchField('');
    }, [catId]);

    const productsByCategory = listProducts.filter(categoryFilter(catId));

    return (
      <div className="p-16 flex flex-col text-center min-h-[90vh]">
        <section className="flex flex-col items-center gap-8">
          <h1 className="text-4xl">Smith Store</h1>
          <div className="mb-8">
            <input
              className="border-2 border-black w-64 h-10 rounded-xl px-4"
              type="search"
              value={searchField}
              placeholder="Busque su producto..."
              onChange={handleChange}
            />
          </div>
        </section>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <div className="w-12 h-12 rounded-full border-4 border-solid border-blue-200 border-l-blue-500 animate-spin">
              <span className="sr-only">Cargando...</span>
            </div>
          </div>
        ) : (
          <ItemList dataProducts={searchResults(productsByCategory)} />
        )}
      </div>
    );
  } else {
    return <Contacto />;
  }
};

export default ItemListContainer;
