import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Login() {
  const [value, setValue] = useState();

  const handleInput = (evt) => {
    evt.preventDefault()
    const {value} = evt.target;

    if (value === '') {
      alert('Please fill the form')
      return;
    }
  }

  const handleButton = () => {
    
  }

  return (
    <section className="login__section">
      <div className="form__wrapper">
        <div className="login__header">
          <p>регистрация</p>
        </div>
        <div className="login__content">
          <form>
            <div className="form__content">
              <p>фио</p>
              <input onInput={handleInput} type="text" />
            </div>
            <div className="form__content">
              <p>почта</p>
              <input type="email" />
            </div>
            <div className="form__content">
              <p>номер телефона</p>
              <input type="tel" />
            </div>
            <div className="form__content">
              <p>пароль</p>
              <input type="password" />
            </div>
            <div className="form__content">
              <p>Подтверждение пароля</p>
              <input type="password" />
            </div>
            <div className="form__content">
              <Link to="/">Зарегестрироваться</Link>
            </div>
          </form>
        </div>
        <div className="form__footer">
          <p>Уже есть аккаунт?</p>
          <p>
            <NavLink to="/Signin">Выполните вход</NavLink>
          </p>
        </div>
      </div>
    </section>
  );
}
