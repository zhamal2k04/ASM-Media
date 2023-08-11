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

const AdsCards = () => {
  return (
    <div className="adsCards-container" id="aboutPage-adsContainer">
      <div className="channelsCards">
        <div className="cardsHolder">
          <div className="cardRow">
            <h1>
              Размещение
              <br />
              на Зор тв
            </h1>
            <img src={zortv} alt="/" />
          </div>
          <div className="cardRow">
            <h1>
              Размещение
              <br />
              на Севимли тв
            </h1>
            <img src={sevimli} alt="/" />
          </div>
          <div className="cardRow">
            <h1>
              Размещение
              <br />
              на My5 тв
            </h1>
            <img src={my5} alt="/" id="third" />
          </div>
        </div>

        <div className="cardsHolder">
          <div className="cardRow">
            <h1>Наружные</h1>
            <img src={banner} alt="/" />
          </div>
          <div className="cardRow">
            <h1>
              Автобусы
              <br />
              левых краях
            </h1>
            <img src={bus} alt="/" />
          </div>
          <div className="cardRow">
            <h1>Лед мониторинг</h1>
            <img src={led} alt="/" />
          </div>
        </div>

        <div className="cardsHolder">
          <div className="cardRow">
            <h1>
              Баннеры
              <br />
              по низким ценам
            </h1>
            <img src={banner2} alt="/" />
          </div>
          <div className="cardRow">
            <h1>Радиореклама</h1>
            <img src={radio} alt="/" />
          </div>
          <div className="cardRow">
            <h1>
              Снимать
              <br />
              профессиональные
              <br /> видеоролики
            </h1>
            <img src={cinema} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsCards;
