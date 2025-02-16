import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { ProductStoreType } from "@/types";

// Definindo o tipo do estado
interface ProductTypes {
  products: ProductStoreType[];
}

const initialState: ProductTypes = {
  products: [],
};

// O índice do produto
const indexSameProduct = (state: ProductTypes, action: ProductStoreType) => {
  return state.products.findIndex(
    (product) =>
      product.id === action.id &&
      product.color === action.color &&
      product.size === action.size,
  );
};

const useProduct = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Adicionar um produto
    addProduct: (state, action: PayloadAction<ProductStoreType>) => {
      const index = indexSameProduct(state, action.payload);
      if (index === -1) {
        state.products.push(action.payload); // Produto não existe, então adiciona ao estado
      } else {
        // Se o produto já existir, você pode atualizar ou apenas ignorar
        console.log("Produto já existe no estado", action.payload);
      }
    },

    // Remover um produto
    removeProduct: (state, action: PayloadAction<ProductStoreType>) => {
      const index = indexSameProduct(state, action.payload);
      if (index !== -1) {
        state.products.splice(index, 1); // Remover o produto pelo índice encontrado
      }
    },

    // Atualizar informações de um produto
    updateProduct: (state, action: PayloadAction<ProductStoreType>) => {
      const index = indexSameProduct(state, action.payload);
      if (index !== -1) {
        state.products[index] = action.payload; // Atualizar o produto
      }
    },

    // Limpar todos os produtos (caso precise)
    clearProducts: (state) => {
      state.products = [];
    },

    allProducts: (state) => {
      state.products = [];
    },
  },
});

// Exportando as ações
export const { addProduct, removeProduct, updateProduct, clearProducts } =
  useProduct.actions;

export default useProduct.reducer;
