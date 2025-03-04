// context/AppContext.js
import React from "react";
import { createContext, useContext, useState } from "react";
import { getAllProducts } from "../../pages/api/getProducts";
import { deleteProductItem } from "../../pages/api/deleteItem";

// Criação do contexto
const AppContext = createContext({
  products: [],
  isLoading: false,
  getProducts: async () => {},
  deleteItem: async (_id: string) => {},
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

  const deleteItem = async (id: string) => {
    await deleteProductItem(id);
    const newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts);
  };

  return (
    <AppContext.Provider
      value={{ products, isLoading, getProducts, deleteItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
