import React, { Component, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import HeaderLogo from "../Images/Header/logo.png";
import SearchIcon from "../Images/Header/search.png";
import PhoneIcon from "../Images/Header/phone.png";
import ShopCart from "../Images/Header/cart.png";
import HeaderAccountIcon from "../Images/Header/account.png";

export default function Header({ totalItems }) {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={HeaderLogo} alt="Header Logo" />
        </Link>
      </div>
      <div className="header__content">
        <div className="header__row">
          <div className="header__search-container">
            <input type="search" placeholder="я ищу..." />
            <button className="header__search-button">
              <img src={SearchIcon} alt="Seach Icon" />
            </button>
          </div>
          <div className="header__links-container">
            <div className="header__phone">
              <img src={PhoneIcon} alt="Phone Icon" />
              <p>
                <NavLink to="Error">+992 95 800 0202</NavLink>
              </p>
            </div>
            <div className="header__shop-cart">
              <NavLink to="/ShoppingCart">
                <img src={ShopCart} alt="Shop Cart" />
                <div className="cart__count">{totalItems}</div>
              </NavLink>
            </div>
            <div className="header__account">
              <NavLink to="/LogIn">
                <img src={HeaderAccountIcon} alt="Account" />
              </NavLink>
            </div>
          </div>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/" className="active-link">
                магазин
              </NavLink>
            </li>
            <li>
              <NavLink to="/LogIn1">о нас</NavLink>
            </li>
            <li>
              <NavLink to="/Signin1">отзывы</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">контакты</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
