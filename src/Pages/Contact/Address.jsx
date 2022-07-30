import React from 'react'

export default function Address() {
  return (
    <section className="contact__address">
        <div className="contact__row">
            <label htmlFor="#">Город</label>
            <input type="text" placeholder='Душанбе'/>
        </div>
        <div className="contact__row">
            <label htmlFor="#">Улица</label>
            <input type="text" placeholder='ул Рудаки 32, дом 3, кв 92'/>
        </div>
        <div className="contact__row">
            <label htmlFor="#">Телефон</label>
            <input type="text" placeholder='+992 90-101-0000'/>
        </div>
        <div className="contact__row">
            <label htmlFor="#">E-Mail</label>
            <input type="text" placeholder='my-ami@gmail.com'/>
        </div>
    </section>
  )
}
