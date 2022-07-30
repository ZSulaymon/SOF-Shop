import React from "react";
import ProductAside from "./ProductAside";
import ProductContent from "./ProductContent";

export default function ProductBody({ prop1 }) {
  return (
    <div className="product__body">
      <ProductAside />
      <ProductContent prop2={prop1} />
    </div>
  );
}
