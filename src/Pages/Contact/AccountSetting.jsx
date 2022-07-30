import React from 'react'

export default function AccountSetting() {
  return (
    <section className="address__account-container">
      <div className="address__account-row">
        <label htmlFor="#">ФИО</label>
        <input type="text" placeholder='Муниса Имранова'/>
      </div>
      <div className="address__account-row">
        <label htmlFor="#">Почта</label>
        <input type="email" placeholder='munisa@gmail.com'/>
      </div>
      <div className="address__account-row">
        <label htmlFor="#">Номер телефона</label>
        <input type="tel" placeholder='+992 90-540-0000'/>
      </div>
      <div className="address__account-row">
        <label htmlFor="#">Сменить пароль</label>
        <input type="password" placeholder='Муниса Имранова'/>
      </div>
      <div className="address__account-row">
        <label htmlFor="#">Подвердить пароль</label>
        <input type="password" placeholder='Муниса Имранова'/>
      </div>
    </section>
  )
}
