'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

import { getAllProducts } from "@/pages/api/getProducts";

import ProductsCarousel from "./carousel";

const ProductsFeatured = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    fetchData();
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

        <ProductsCarousel products={products} />
      </div>
    </section>
  );
};

export default ProductsFeatured;
