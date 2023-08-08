import React from 'react'
import "./MyFooter.css"
import footer_logo from "../../Assets/Images/footer-logo.jpg"
import { Link } from 'react-router-dom'

const MyFooter = () => {
  return (
    <div className='footer-container'>
        <div className="rowsHandler">
          <div className="rows">
              <img src={footer_logo} alt="/" />
          </div>
          <div className="rows">
              <h2>Наши Сервисы</h2>
              <hr style={{width:'10.33rem', border: '2px solid white'}}/>
              <ul>
                <Link>Размещение рекламы на Тв</Link>
                <Link>Наружные рекламы</Link>
                <Link>Лед мониторинг</Link>
                <Link>Баннеры по низким ценам</Link>
                <Link>Снимать профессиональные видио ролики</Link>
              </ul>
          </div>
          <div className="rows">
              <h2>Быстрая Ссылка</h2>
              <hr style={{width:'10.33rem', border: '2px solid white'}}/>
              <ul>
                <Link>» Главная</Link>
                <Link>» О нас</Link>
                <Link>» Портфолио</Link>
                <Link>» Локация</Link>
                <Link>» Контакты</Link>
              </ul>
          </div>
          <div className="rows">
              <h2>Свзязаться</h2>
              <hr style={{width:'10.33rem', border: '2px solid white'}}/>
              <ul>
                <li>+998(33)0700070</li>
                <li>+998(33)0700070</li>
              </ul>
              <h3>Узбекистан, Ташкент улица Богибустон 186</h3>
              <p>@asm___media</p>
          </div>
        </div>
    </div>
  )
}

export default MyFooter