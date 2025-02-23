'use client'
import { useEffect, useState, useRef } from "react";
import { getId } from "@/utils/getID";
import ProductItem from "../../product-item";
import ProductsLoading from "./loading";

type Product = {
  id: string;
  name: string;
  price: string;
  color: string;
  currentPrice: number;
  thumb: string;
}

interface Products {
  products: Array<Product>;
  isLoading: boolean;
}

const ProductsContent = ({ products, isLoading }: Products) => {
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);  // Estado para os produtos visíveis
  const [itemsToShow, setItemsToShow] = useState(20); // Quantidade de produtos a mostrar inicialmente
  const observer = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Inicializa a lista de produtos visíveis com base no estado inicial
    setVisibleProducts(products.slice(0, itemsToShow));
  }, [products, itemsToShow]);

  // Usamos o IntersectionObserver para detectar o final da lista
  useEffect(() => {
    const handleIntersection = ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        // Aumenta a quantidade de produtos a serem exibidos
        setItemsToShow((prev) => prev + 20);
      }
    };

    observer.current = new IntersectionObserver(handleIntersection, {
      rootMargin: '100px',
    });

    if (loadMoreRef.current) {
      observer.current.observe(loadMoreRef.current);
    }

    // Limpeza do observer
    return () => {
      if (observer.current && loadMoreRef.current) {
        observer.current.unobserve(loadMoreRef.current);
      }
    };
  }, []);

  return (
    <>
      {isLoading && <ProductsLoading />}
      <section className="products-list">
        {visibleProducts.map((item: Product, index: number) => (
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
      <div ref={loadMoreRef}>
        {isLoading && <ProductsLoading />}
      </div>
    </>
  );
};

export default ProductsContent;
