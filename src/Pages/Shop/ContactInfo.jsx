import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactInfo() {
  return (
    <div className='contact__info'>
      <div className="contact__info-title">
        <p>Контактная информация</p>
      </div>
      <div className="contact__info-form">
        <div>
          <input type="text" placeholder='Фамилия' />
        </div>
        <div>
          <input type="text" placeholder='Имя' />
        </div>
        <div>
          <input type="tel" placeholder='Номер телефона' />
        </div>
      </div>
      <div className="contact__info-link">
        <Link to='/'>Далее</Link>
      </div>
    </div>
  )
}
