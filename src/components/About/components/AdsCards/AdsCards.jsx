import React from "react";
import "./AdsCards.css";
import zortv from "../../../../Assets/Images/zortv.png";
import sevimli from "../../../../Assets/Images/sevimli.png";
import my5 from "../../../../Assets/Images/my5.png";
import banner from "../../../../Assets/Images/banner.png";
import banner2 from "../../../../Assets/Images/banner2.png";
import bus from "../../../../Assets/Images/bus.png";
import led from "../../../../Assets/Images/led.png";
import radio from "../../../../Assets/Images/radio.png";
import cinema from "../../../../Assets/Images/cinema.png";
import { Link } from "react-router-dom";
const AdsCards = () => {
  return (
    <div className="adsCards-container" id="aboutPage-adsContainer">
      <div className="channelsCards" id="aboutPage-channelCards">
        <div className="cardsHolder">
          <Link to={"/zortv"} target="_blank">
            <div className="cardRow">
              <h1>
                Размещение
                <br />
                на Зор тв
              </h1>
              <img src={zortv} alt="Зортв" />
            </div>
          </Link>

          <Link to={"/sevimlitv"} target="_blank">
            <div className="cardRow">
              <h1>
                Размещение
                <br />
                на Севимли тв
              </h1>
              <img src={sevimli} alt="sevimli_logo" />
            </div>
          </Link>

          <Link to={"/my5"} target="_blank">
            <div className="cardRow">
              <h1>
                Размещение
                <br />
                на My5 тв
              </h1>
              <img src={my5} alt="My5" id="third" />
            </div>
          </Link>
        </div>

        <div className="cardsHolder">
          <Link to={"/outdoor-ads"} target="_blank">
            <div className="cardRow">
              <h1>Наружные</h1>
              <img src={banner} alt="наружные реклама" id="banner" />
            </div>
          </Link>

          <Link to={"/bus-ads"} target="_blank">
            <div className="cardRow">
              <h1>
                Автобусы
                <br />
                левых краях
              </h1>
              <img src={bus} alt="автобусные реклама" />
            </div>
          </Link>

          <Link to={"/led-ads"} target="_blank">
            <div className="cardRow">
              <h1>Лед мониторинг</h1>
              <img src={led} alt="led_pic" />
            </div>
          </Link>
        </div>

        <div className="cardsHolder">
          <Link to={"/banner-ads"} target="_blank">
            <div className="cardRow">
              <h1>
                Баннеры
                <br />
                по низким ценам
              </h1>
              <img src={banner2} alt="баннер реклама" />
            </div>
          </Link>

          <Link to={"/radio-ads"} target="_blank">
            <div className="cardRow">
              <h1>Радиореклама</h1>
              <img src={radio} alt="радио реклама" />
            </div>
          </Link>

          <Link to={"/cinema-ads"} target="_blank">
            <div className="cardRow">
              <h1>
                Снимать
                <br />
                профессиональные
                <br /> видеоролики
              </h1>
              <img src={cinema} alt="видео реклама" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdsCards;
