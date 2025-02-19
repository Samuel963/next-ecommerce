import { BASE_URL } from "@/utils/server";

export const getAllProducts = async (limite = 100) => {

  const res = await fetch(`${BASE_URL}products?limit=${limite}`);
  const products = await res.json();
  return products;
};
