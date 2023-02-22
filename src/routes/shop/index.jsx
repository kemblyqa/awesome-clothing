import React, { useContext } from "react";
import { ProductCard } from "../../components/ProductCard";
import { ProductsContext } from "../../contexts/ProductsContext";

import "./styles.scss";

export const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
