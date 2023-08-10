import React from 'react'
import "./MyFooter.css"
import footer_logo from "../../Assets/Images/footer-logo.jpg"
import { Link } from 'react-router-dom'

const MyFooter = () => {
  return (
    <div class="footer-container">
    <img src={footer_logo} alt="/"/>
    <ul>
        <li>
            <Link>
                <h1>Наши Сервисы</h1>
                <hr style={{border:'1px solid white'}}/>
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
            <Link>
                <p>
                    » Главная
                </p>
            </Link>
        </li>
        <li>
            <Link>
                <p>
                    » О нас
                </p>
            </Link>
        </li>
        <li>
            <Link>
                <p>
                    » Портфолио
                </p>
            </Link>
        </li>
        <li>
            <Link>
                <p>
                    » Локация
                </p>
            </Link>
        </li>
        <li>
            <Link>
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
        <li>
            <p>+998(33)0700070</p>
            <p>+998(33)0700070</p>
        </li>
        <li>
            <h2>Узбекистан, Ташкент<br/>улица Богибустон 186</h2>
        </li>
        <li>
            <p>@m_azizaas</p>
        </li>
    </ul>
</div>
  )
}

export default MyFooter