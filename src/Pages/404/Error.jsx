import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Error() {
  return (
    <section className="error__section">
      <div className="error__title">
        <p>404 error</p>
      </div>
      <div className="error__text">
        <p>
          Такой страницы не существует Вернитесь пожалуйста на главную чтобы
          продолжить поиск
        </p>
      </div>
      <div className="error__link">
        <NavLink to="/">Главная страница</NavLink>
      </div>
    </section>
  );
}
