'use client'
import Link from "next/link";
import { useEffect } from "react";

import ProductsCarousel from "./carousel";
import { useAppContext } from "@/store/context/AppContext";
import ProductsLoading from "../products-content/list/loading";

const ProductsFeatured = () => {
  const { products, isLoading, getProducts } = useAppContext();

  useEffect(() => {
    if (products.length === 0) {
      getProducts();
    }
  }, []);

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Selecionados para você</h3>
          <Link href="/products" className="btn btn--rounded btn--border">
            Mostrar todos
          </Link>
        </header>

        {isLoading && <ProductsLoading />}
        <ProductsCarousel products={products.slice(0, 10)} />
      </div>
    </section>
  );
};

export default ProductsFeatured;
