import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";

export default function LatestCard({id, image, alt, title, price, icon, finalProp}) {
  const [isActive, setIsActive] = useState(false)

  const finalFunctionForutton = (evt) => {
    finalProp(id)

    setIsActive(!isActive)
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
          <button onClick={finalFunctionForutton} className={`icon__button ${isActive ? "clicked-item" : ""}`}>
            <span className="add__to-cart">Add</span>
            <span className="added">Added</span>
            <img src={icon} alt="" className="cart__icon"/>
            <div className="cart__item-icon"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
