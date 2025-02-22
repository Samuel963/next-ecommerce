'use client'
import { getId } from "@/utils/getID";

import ProductItem from "../../product-item";
import ProductsLoading from "./loading";

type Product = {
  id: string;
  name: string;
  price: number;
  color: string;
  currentPrice: number;
  thumb: string;
}

interface Products {
  products: Array<Product>;
  isLoading: boolean;
}

const ProductsContent = ({ products, isLoading }: Products) => {

  return (
    <>
      {isLoading && <ProductsLoading />}
      <section className="products-list">
        {products.map((item: any, index: any) => (
          <ProductItem
            id={item.id}
            name={getId(item.id)}
            price={item.price}
            color={item.color}
            currentPrice={item.currentPrice}
            key={index}
            thumb={item.thumb}
          />
        ))}
      </section>
    </>
  );
};

export default ProductsContent;
