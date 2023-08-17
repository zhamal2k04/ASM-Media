import React from 'react'
import "./MyFooter.css"
import footer_logo from "../../Assets/Images/footer-logo.jpg"
import { Link } from 'react-router-dom'

const MyFooter = () => {
  return (
    <div class="footer-container">
    <section className='imgContainer'>
        <img src={footer_logo} alt="footer_logo"/>
    </section>
    <ul>
        <li>
            <Link>
                <h1>Наши Сервисы</h1>
                <hr style={{border:'1px solid white'}} id='firstHr'/>
            </Link>
        </li>
        <li>
            <Link>
                <p>
                    Размещение рекламы на Тв
                </p>
            </Link>
        </li>
        <li>
          <Link>
            <p>
                Наружные рекламы
            </p>
          </Link>
        </li>
        <li>
           <Link>
            <p>
                Автобусы левых краях
            </p>
           </Link>
        </li>
        <li>
            <Link>
                <p>
                    Лед мониторинг
                </p>
            </Link>
        </li>
        <li>
            <Link>
                <p>
                    Баннеры по низким ценам
                </p>
            </Link>
        </li>
        <li>
            <Link>
                <p>
                    Снимать профессиональные видио ролики
                </p>
            </Link>
        </li>
    </ul>
    <ul>
        <li>
            <Link>
                <h1>Быстрые Ссылки</h1>
                <hr style={{border:'1px solid white'}}/>
            </Link>
        </li>
        <li>
            <Link to={"/home"} target='_blank'>
                <p>
                    » Главная
                </p>
            </Link>
        </li>
        <li>
            <Link to={"/about-us"} target='_blank'>
                <p>
                    » О нас
                </p>
            </Link>
        </li>
        <li>
            <Link to={"/portfolio"} target='_blank'>
                <p>
                    » Портфолио
                </p>
            </Link>
        </li>
        <li>
            <Link to={"https://yandex.uz/maps/10335/tashkent/house/YkAYdARhQUYPQFprfX52cHtkZw==/?ll=69.231838%2C41.271773&z=17.15"} target='_blank'>
                <p>
                    » Локация
                </p>
            </Link>
        </li>
        <li>
            <Link to={"/contacts"} target='_blank'>
                <p>
                    » Контакты
                </p>
            </Link>
        </li>
    </ul>
    <ul>
        <li>
            <Link>
                <h1>Свзяться</h1>
                <hr style={{border:'1px solid white'}}/>
            </Link>
        </li>
        <li style={{display:'flex', flexDirection:'column'}}>
            <a href="#" onClick={() => window.location.href = 'tel:+998330700070'}>+998(33)0700070</a>
            <a href="#" onClick={() => window.location.href = 'tel:+998330750070'}>+998(33)0750070</a>
        </li>
        <li>
            <h2>Узбекистан, Ташкент<br/>улица Богибустон 186</h2>
        </li>
        <li>
            <Link to={"https://www.instagram.com/asm_media_uzb/"} target='_blank'>@asm_media_uzb</Link>
        </li>
    </ul>
</div>
  )
}

export default MyFooter