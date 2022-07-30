import React from "react";
import FooterLogo from "../Images/Footer/footer-logo.png";
import FaceBook from "../Images/Footer/facebook.png";
import Instagram from "../Images/Footer/instagram.png";
import WhatsApp from "../Images/Footer/whatsapp.png";
import Viber from "../Images/Footer/viber.png";
import Telegram from "../Images/Footer/telegram.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__row-1">
        <div className="footer__links-container">
          <div className="links__container">
            <div className="links__header">
              <p>О Компании</p>
            </div>
            <div className="links__lists">
              <ul>
                <li>
                  <a href="#">Поставщикам</a>
                </li>
                <li>
                  <a href="#">Вакансии в компании</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
                <li>
                  <a href="#">Новости</a>
                </li>
                <li>
                  <a href="#">Пользовательское соглашение</a>
                </li>
                <li>
                  <a href="#">Политика обработки персональных данных</a>
                </li>
                <li>
                  <a href="#">Покупателям</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="links__container">
            <div className="links__header">
              <p>Покупателям</p>
            </div>
            <div className="links__lists">
              <ul>
                <li>
                  <a href="#">Доставка и оплата</a>
                </li>
                <li>
                  <a href="#">Как вернуть</a>
                </li>
                <li>
                  <a href="#">Как заказать</a>
                </li>
                <li>
                  <a href="#">Программа лояльности</a>
                </li>
                <li>
                  <a href="#">Вопросы и ответы</a>
                </li>
                <li>
                  <a href="#">Сервисные центры</a>
                </li>
                <li>
                  <a href="#">Юридическим лицам</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__logo-container">
          <div className="footer__logo">
            <a href="#"><img src={FooterLogo} alt="" /></a>
          </div>


          
          <div className="footer__social-media">
            <div className="icon__container">
              <a href="#"><img src={FaceBook} alt="" /></a>
            </div>
            <div className="icon__container">
              <a href="#"><img src={Instagram} alt="" /></a>
            </div>
            <div className="icon__container">
              <a href="#"><img src={WhatsApp} alt="" /></a>
            </div>
            <div className="icon__container">
              <a href="#"><img src={Viber} alt="" /></a>
            </div>
            <div className="icon__container">
              <a href="#"><img src={Telegram} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__row-2">
        <p className="footer__copyright">© Интернет-магазин sof.tj.</p>
      </div>
    </footer>
  );
}
