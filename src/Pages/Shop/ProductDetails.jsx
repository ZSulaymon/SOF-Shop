import React from "react";
import DeleteIcon from '../../Images/Product/delete.png'

export default function ProductDetails({ prop4, prop6, prop8, currentPrice }) {
  const handleDelete = (id) => {
    prop6(id);
  };

  const increment = (id, amount) => {
    prop8(id, 1); //! +1 = amount - ChangeAmount - argument
  };

  const deccrement = (id, amount) => {
    if (amount === 1) return;
    prop8(id, -1); //! -1 = amount - ChangeAmount - argument
  };

  return (
    <div className="product__details">
      <div className="product__details-header">
        <div>
          <p>Название</p>
        </div>
        <div>
          <ul>
            <li>
              <p>Цена</p>
            </li>
            <li>
              <p>Кол-во, м</p>
            </li>
            <li>
              <p>Сумма</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="product__body-card">
        {prop4.map((item) => {
          return (
            <div key={item.id} className="cart">
              <div className="main__cart-info">
                <div className="cart__image">
                  <img src={item.img.src} />
                </div>
                <div className="cart__name">
                  <p>{item.title}</p>
                </div>
              </div>
              <div className="secondry__cart-info">
                <div className="cart__price">
                  <p>{item.price}</p>
                </div>
                <div className="cart--count">
                  <button onClick={() => {increment(item.id, item.count);}}>+</button>
                  <p>{item.count}</p>
                  <button onClick={() => {deccrement(item.id, item.count);}}>-</button>
                </div>
                <div className="cart__sum">
                  <p>{item.count * item.numPrice}</p>
                </div>
                <div className="cart__delete">
                  <button onClick={() => {handleDelete(item.id);}}>
                    <img src={DeleteIcon} alt="" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
