import { BASE_URL } from "@/utils/server";

export const getAllProducts = async () => {
  const res = await fetch(`${BASE_URL}products/`);
  const products = await res.json();
  return products;
};
