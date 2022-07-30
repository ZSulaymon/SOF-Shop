import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function ContactAside() {
  return (
    <aside className="contact__aside">
        <div className="contact__aside-container">
            <NavLink to="Errors">Заказы</NavLink>
        </div>
        <div className="contact__aside-container">
            <NavLink to="Address">Адресс</NavLink>
        </div>
        <div className="contact__aside-container">
            <NavLink to="AccountSetting">Настройки аккаунта</NavLink>
        </div>
        <div className="contact__aside-container">
            <NavLink to="/">Выход</NavLink>
        </div>
    </aside>
  )
}
