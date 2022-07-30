import React from "react";

export default function ProductInfo() {
  return (
    <div className="product__info">
      <div className="product__info-content">
        <div className="product__info-title">
          <p>Информация о заказе</p>
        </div>
        <div className="product__info-body">
          <div className="product__info-name">
            <p>Паплин <br />со стразами</p>
          </div>
          <div className="product__info-information">
            <p>3 м</p>
          </div>
          <div className="product__info-price">
            <p>2 с</p>
          </div>
        </div>
        <div className="product__info-footer">
          <div className="product__info-result">
            <p>Итог:</p>
          </div>
          <div className="product__result-price">
            <p>300 c</p>
          </div>
        </div>
      </div>
      <div className="product__info-button">
        <button>Подтвердить заказ</button>
      </div>
    </div>
  );
}
