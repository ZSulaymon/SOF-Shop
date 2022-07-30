import React from "react";
import { Link, NavLink } from "react-router-dom";
import LatestCard from "../../Cart/LatestCard";
import LatestProductData from "../../Data/LatestProductData";
import ProductContentData from "../../Data/ProductContentData";

export default function LatestProducts({ onLatestProducts }) {
  const productElement = [];

  for (let index = 0; index < 3; index++) {
    if (index < ProductContentData.length) {
      let element = ProductContentData[index];
      productElement.push(
        <LatestCard
          id={element.id}
          key={element.id}
          image={element.img.src}
          alt={element.img.alt}
          title={element.title}
          price={element.price}
          icon={element.icon}
          finalProp={onLatestProducts}
        />
      );
    }
  }
  return (
    <section className="latest__products-section">
      <div className="latest__products-header">
        <p className="latest__title">Последние добавления</p>
        <NavLink to="/Product" className="latest__title-2">
          смотреть всё
        </NavLink>
      </div>
      <div className="latest__content">{productElement}</div>
    </section>
  );
}
