import { React } from "react";
import { Link } from "react-router-dom";
import "./ServiceComponent.css";
import yoshlar from "../../../../Assets/Images/yoshlar.jpg";
import toshkent from "../../../../Assets/Images/toshkent.jpg";
import ozbekiston24 from "../../../../Assets/Images/o'zbekiston24.jpg";
import ozbekiston from "../../../../Assets/Images/o'zbekiston.jpg";
import navo from "../../../../Assets/Images/navo.jpg";
import sport from "../../../../Assets/Images/sport.jpg";
import oilaviy from "../../../../Assets/Images/oilaviy.jpg";
import mahalla from "../../../../Assets/Images/mahalla.jpg";
import kinoteatr from "../../../../Assets/Images/kinoteatr.jpg";
import zortv from "../../../../Assets/Images/zortv.png";
import sevimli from "../../../../Assets/Images/sevimli.png";
import my5 from "../../../../Assets/Images/my5.png";
import banner from "../../../../Assets/Images/banner.png";
import banner2 from "../../../../Assets/Images/banner2.png";
import bus from "../../../../Assets/Images/bus.png";
import led from "../../../../Assets/Images/led.png";
import radio from "../../../../Assets/Images/radio.png";
import cinema from "../../../../Assets/Images/cinema.png";

const ServiceComponent = () => {
  return (
    <div className="serviceComponent-container">
      <div className="serviceTitle">
        <h1>Service</h1>
        <h2>Наши услуги Размещение рекламы на Тв</h2>
        <h3>Размещение рекламы на (24 каналы)</h3>
      </div>
      <div className="serviceChannels">
        <div className="rowImgs">
          <img src={kinoteatr} alt="/" />
          <img src={toshkent} alt="/" />
          <img src={sport} alt="/" />
        </div>
        <div className="rowImgs">
          <img src={mahalla} alt="/" />
          <img src={ozbekiston24} alt="/" />
          <img src={yoshlar} alt="/" />
        </div>
        <div className="rowImgs">
          <img src={navo} alt="/" />
          <img src={oilaviy} alt="/" />
          <img src={ozbekiston} alt="/" />
        </div>
      </div>

      <div className="channelsCards">
        <div className="cardsHolder">
          <Link to={"/zortv"} target="_blank">
            <div className="cardRow">
              <h1>
                Размещение
                <br />
                на Зор тв
              </h1>
              <img src={zortv} alt="/" />
            </div>
          </Link>

          <Link to={"/sevimlitv"} target="_blank">
            <div className="cardRow">
              <h1>
                Размещение
                <br />
                на Севимли тв
              </h1>
              <img src={sevimli} alt="/" />
            </div>
          </Link>

          <Link to={"/my5"} target="_blank">
            <div className="cardRow">
              <h1>
                Размещение
                <br />
                на My5 тв
              </h1>
              <img src={my5} alt="/" id="third" />
            </div>
          </Link>
        </div>

        <div className="cardsHolder">
          <Link to={"/outdoor-ads"} target="_blank">
            <div className="cardRow">
              <h1>Наружные</h1>
              <img src={banner} alt="/" />
            </div>
          </Link>

          <Link to={"/bus-ads"} target="_blank">
            <div className="cardRow">
              <h1>
                Автобусы
                <br />
                левых краях
              </h1>
              <img src={bus} alt="/" />
            </div>
          </Link>

          <Link to={"/led-ads"} target="_blank">
            <div className="cardRow">
              <h1>Лед мониторинг</h1>
              <img src={led} alt="/" />
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
              <img src={banner2} alt="/" />
            </div>
          </Link>

          <Link to={"/radio-ads"} target="_blank">
            <div className="cardRow">
              <h1>Радиореклама</h1>
              <img src={radio} alt="/" />
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
              <img src={cinema} alt="/" />
            </div>
          </Link>
        </div>
        <div className="offers">
          <h1>По низким ценам</h1>
          <h2>Скидки от 5% до 75%</h2>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
