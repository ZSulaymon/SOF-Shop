import React from "react";
import AsideCard from "../../Cart/AsideCard";
import AsideData from "../../Data/AsideData";
import { useState } from "react";

import ProductMaterial from "../../Cart/ProductMaterial";
import MaterialData from "../../Data/MaterialData";

export default function ProductAside() {
  const [range, setRange] = useState(100);
  const [classes, setClasses] = useState("blue-color");

  const productElement = AsideData.map((item) => {
    return <AsideCard product={item.product} amount={item.amount} key={item.id} />;
  });

  const materialElement = MaterialData.map((item) => {
    return <ProductMaterial name={item.material} key={item.id}/>;
  });

  function valueChanged(rangeValue) {
    setRange(rangeValue);

    if (rangeValue > 800) {
      setClasses("red-color");
    } else {
      setClasses("blue-color");
    }
  }

  return (
    <aside className="product__aside">
      <div className="aside__title">
        <p>Категории</p>
      </div>
      <div className="aside__content">
        <div className="aside__header">
          <div className="category__title">
            <p>Всего товаров</p>
          </div>
          <div className="category__number">
            <p>1063</p>
          </div>
        </div>
        <div className="aside__body">
          {productElement}
          <div className="material__container">
            <div className="material__title">
              <p>Тип материала</p>
            </div>
            {materialElement}
          </div>
          <div className="aside__price">
            <div className="aside__price-title">
              <p>Цена</p>
            </div>
            <div className="price__range">
              <input
                className="blue-color"
                type="range"
                min={0}
                max={1000}
                value={range}
                onChange={(e) => valueChanged(e.target.value)}
              />
            </div>
            <div className="price__info">
              <span className={classes}>Цена от {range} до 1000 смн</span>
            </div>
            <div className="price__button">
              <button>Применить</button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
