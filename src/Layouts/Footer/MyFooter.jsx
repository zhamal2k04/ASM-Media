import React from "react";
import "./MyFooter.css";
import footer_logo from "../../Assets/Images/footer-logo.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MyFooter = () => {
  const { t } = useTranslation();
  return (
    <div className="footer-container">
      <section className="imgContainer">
        <img src={footer_logo} alt="footer_logo" />
      </section>
      <ul>
        <li>
          <Link>
            <h1>{t('ourService')}</h1>
            <hr style={{ border: "1px solid white" }} id="firstHr" />
          </Link>
        </li>
        <li>
          <Link>
            <p>{t('accomodationToTv')}</p>
          </Link>
        </li>
        <li>
          <Link>
            <p>{t('outdoorAds')}</p>
          </Link>
        </li>
        <li>
          <Link>
            <p>{t('busAds')}</p>
          </Link>
        </li>
        <li>
          <Link>
            <p>{t('ledMonitoring')}</p>
          </Link>
        </li>
        <li>
          <Link>
            <p>{t('banners')} {t('bannerPrice')}</p>
          </Link>
        </li>
        <li>
          <Link>
            <p>{t('cinemaAds')}</p>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link>
            <h1>{t('quickLinks')}</h1>
            <hr style={{ border: "1px solid white" }} />
          </Link>
        </li>
        <li>
          <Link to={"/home"} target="_blank">
            <p>» {t('home')}</p>
          </Link>
        </li>
        <li>
          <Link to={"/about-us"} target="_blank">
            <p>» {t('about')}</p>
          </Link>
        </li>
        <li>
          <Link to={"/portfolio"} target="_blank">
            <p>» {t('portfolio')}</p>
          </Link>
        </li>
        <li>
          <Link
            to={
              "https://yandex.uz/maps/10335/tashkent/house/YkAYdARhQUYPQFprfX52cHtkZw==/?ll=69.231838%2C41.271773&z=17.15"
            }
            target="_blank"
          >
            <p>» {t('location')}</p>
          </Link>
        </li>
        <li>
          <Link to={"/contacts"} target="_blank">
            <p>» {t('contacts')}</p>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link>
            <h1>{t('aboutBtnClick')}</h1>
            <hr style={{ border: "1px solid white" }} />
          </Link>
        </li>
        <li style={{ display: "flex", flexDirection: "column" }}>
          <a
            href="#"
            id="nums"
            onClick={() => (window.location.href = "tel:+998330700070")}
          >
            +998(33)0700070
          </a>
          <a
            href="#"
            id="nums"
            onClick={() => (window.location.href = "tel:+998330750070")}
          >
            +998(33)7010070
          </a>
        </li>
        <li>
          <h2>
            {t('quickLocation')}
            <br />
            {t('locationStreet')}
          </h2>
        </li>
      </ul>
    </div>
  );
};

export default MyFooter;
