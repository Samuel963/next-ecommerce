import { BASE_URL } from "@/utils/server";

export const deleteProductItem = async (id: string) => {

  const res = await fetch(`${BASE_URL}products/${id}`, {
    method: 'DELETE'
  });
  const products = await res.json();
  return products;
};
