// context/AppContext.js
import React from 'react';
import { createContext, useContext, useState } from 'react';
import { getAllProducts } from '../../pages/api/getProducts';

// Criação do contexto
const AppContext = createContext({
  products: [],
  isLoading: false,
  getProducts: async () => { }
});

// Provedor do Contexto
export const AppProvider = ({ children }: any) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const data = await getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppContext.Provider value={{ products, isLoading, getProducts }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
