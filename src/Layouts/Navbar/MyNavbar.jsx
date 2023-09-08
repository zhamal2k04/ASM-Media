import React from "react";
import "./MyNavbar.css";
import nav_logo from "../../Assets/Images/footer-logo.jpg";
import telegram from "../../Assets/Images/telegram.png";
import instagram from "../../Assets/Images/instagram.png";
import cell from "../../Assets/Images/cell.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../UI/LanguageSelector/LangSelector"

const MyNavbar = () => {
  const {t} = useTranslation()

  return (
    <div className="nav-container">
      <Link to={"/home"}>
        <img src={nav_logo} alt="nav_logo" />
      </Link>
      <div className="section">
        <ol>
          <li>
            <Link to={"https://t.me/asm_media"} target="_blank">
              <img src={telegram} alt="telegram_logo" />
              <p>@asm_media</p>
            </Link>
          </li>
          <li>
            <Link to={"https://instagram.com/asm_media_uzb "} target="_blank">
              <img src={instagram} alt="instagram_logo" />
              <p>@asm_media_uzb</p>
            </Link>
          </li>
          <li>
            <Link to={""}>
              <img src={cell} alt="phone_logo" />
              <a href="#" onClick={() => window.location.href = 'tel:+998330750070'}>+998(33)0700070</a>
            </Link>
          </li>
         
        </ol>

        <ul>
        <LanguageSelector/>
          <Link to={"/home"}>{t('home')}</Link>
          <Link to={"/about-us"}>{t('about')}</Link>
          <Link to={"/portfolio"}>{t('portfolio')}</Link>
          <Link to={"/contacts"}>{t('contacts')}</Link>
        </ul>
      </div>
    </div>
  );
};

export default MyNavbar;
