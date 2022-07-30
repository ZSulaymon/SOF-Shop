import React from "react";
import search from "../../Images/Product/search.png";
import FirstIcon from "../../Images/Product/bxs_grid.png";
import Burger from "../../Images/Product/burger.png";
import Vector from "../../Images/Product/Vector.png";

export default function ProductHeader() {
  return (
    <section className="product__section">
      <div className="product__title">
        <p className="catalog__title">Каталог товаров</p>
        <p>Главное | Каталог товаров</p>
      </div>
      <div className="product__search-info">
        <div className="product__search-container">
          <input type="search" placeholder="Поиск" />
          <button>
            <img src={search} alt="" />
          </button>
        </div>
        <div className="product__search-information">
          <div className="shown__page">
            <p>Показано 1-9 из 50</p>
          </div>
          <div className="show__page">
            <p>
              <a href="#">Показать</a>
            </p>
            <p>
              <a href="#">9</a>
            </p>
            <p>
              <a href="#">15</a>
            </p>
            <p>
              <a href="#">30</a>
            </p>
          </div>
          <div className="sort__container">
            <div>
              <img src={FirstIcon} alt="" />
            </div>
            <div>
              <img src={Burger} alt="" />
            </div>
            <div className="sort__icon">
              <p>
                Сортировка по
                <img src={Vector} alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
