'use client'
import { useEffect, useState } from "react";

import { getAllProducts } from "@/pages/api/getProducts";
import { getId } from "@/utils/getID";

import ProductItem from "../../product-item";
import ProductsLoading from "./loading";

const ProductsContent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <>
      {!products && <ProductsLoading />}

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
