'use client'
import { useEffect } from "react";
import List from "./list";
import { useAppContext } from "@/store/context/AppContext";

const ProductsContent = () => {
  //const [orderProductsOpen, setOrderProductsOpen] = useState(false);
  const { products, isLoading, getProducts } = useAppContext();

  useEffect(() => {
    if (products.length === 0) {
      getProducts();
    }
  }, []);

  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>
          Todos ({products.length})
        </h2>
        {/*
        <button
          type="button"
          onClick={() => setOrderProductsOpen(!orderProductsOpen)}
          className="products-filter-btn"
        >
          <i className="icon-filters" />
        </button>
        <form
          className={`products-content__filter ${orderProductsOpen ? "products-order-open" : ""}`}
        >
          <div className="products__filter__select">
            <h4>Show products: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
              </select>
            </div>
          </div>
          <div className="products__filter__select">
            <h4>Sort by: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
              </select>
            </div>
          </div>
        </form>
        */}
      </div>
      <List products={products} isLoading={isLoading} />
    </section>
  );
};

export default ProductsContent;
