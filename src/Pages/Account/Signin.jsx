import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Signin() {
  return (
    <section className="signin__section">
      <div className="signin__title">
        <p>Вход</p>
      </div>
      <div className="signin__body">
        <form action="#">
          <div className="signin__content">
            <div className="signin__row">
              <label htmlFor="phone-number">Номер телефона</label>
              <input id="phone-number" type="tel" />
            </div>
            <div className="signin__row">
              <label htmlFor="phone-number">Пароль</label>
              <input type="password" />
            </div>
            <div className="signin__row">
              <input type="checkbox" />
              <span>Запомнить меня</span>
            </div>
            <div className="signin__row">
              <Link className="link" to='/'>Зарегестрироваться</Link>
            </div>
            <div className="signin__row">
              <p>Нет аккаунта?</p>
              <Link to="/Login">Зарегестрируйтесь</Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
