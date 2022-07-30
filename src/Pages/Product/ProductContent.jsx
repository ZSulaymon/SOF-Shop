import React from "react";
import { Link, NavLink } from "react-router-dom";
import ProductContentData from "../../Data/ProductContentData";
import ShoppingCard from "../../Cart/ShoppingCard";

export default function ProductContent({ prop2 }) {
  const productElement = ProductContentData.map((product) => {
    return (
      <ShoppingCard
        id={product.id}
        key={product.id}
        image={product.img.src}
        alt={product.img.alt}
        title={product.title}
        price={product.price}
        icon={product.icon}
        item={prop2}
      />
    );
  });
  return (
    <div className="product__content">
      {productElement}
    </div>
  );
}
