import React from "react";
import NewsImage1 from "../../Images/Main/4.png";
import NewsImage2 from "../../Images/Main/5.png";

export default function News() {
  return (
    <section className="news__section">
      <div className="news__header">
        <p>Акции и новости</p>
      </div>
      <div className="news__content">
        <div className="news__content-card">
          <span>Новое поступления товаров</span>
          <img src={NewsImage1} alt="" />
        </div>
        <div className="news__content-card">
          <span>Скидки на влажные салфетки</span>
          <img src={NewsImage2} alt="" />
        </div>
      </div>
    </section>
  );
}
