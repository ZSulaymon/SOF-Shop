import React from "react";
import { Link, NavLink } from "react-router-dom";
import BestsellersCard from "../../Cart/BestsellersCard";
import BestsellersData from "../../Data/BestsellersData";
import ProductContentData from "../../Data/ProductContentData";

export default function Bestsellers({ prop1 }) {
  const productElement = [];

  for (let index = 0; index < 3; index++) {
    if (index < ProductContentData.length) {
      let element = ProductContentData[index];
      productElement.push(
        <BestsellersCard
          id={element.id}
          key={element.id}
          image={element.img.src}
          alt={element.img.alt}
          title={element.title}
          price={element.price}
          icon={element.icon}
          finalProp={prop1}
        />
      );
    }
  }
  return (
    <section className="bestsellers__section">
      <div className="bestsellers-header">
        <p className="bestsellers__title">Хиты продаж</p>
        <NavLink to="/Product" className="bestsellers__title-2">
          смотреть всё
        </NavLink>
      </div>
      <div className="bestsellers__content">{productElement}</div>
    </section>
  );
}
