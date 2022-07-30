import React from "react";
import { Link, NavLink } from "react-router-dom";
import ProductHeader from "./ProductHeader";
import ProductBody from "./ProductBody";

export default function Product({ onItems }) {
  return (
    <div className="product__page">
      <ProductHeader />
      <ProductBody prop1={onItems} />
    </div>
  );
}
