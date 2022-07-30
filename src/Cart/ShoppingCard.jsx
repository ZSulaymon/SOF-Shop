import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function ShoppingCard({id, image, alt, title, price, icon, item}) {

  const finalFunctionForutton = () => {
    item(id)
  }

  return (
    <div className="product__card">
      <div className="product__image">
        <NavLink to="/ProductPage">
          <img src={image} alt="" />
        </NavLink>
      </div>
      <div className="product__info">
        <div className="product__description">
          <p className="product__title">
            <Link to="/ProductPage">{title}</Link>
          </p>
          <p className="product__price">{price}</p>
        </div>
        <div className="product__icon">
          <button onClick={finalFunctionForutton} className="icon__button">
            <img src={icon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
