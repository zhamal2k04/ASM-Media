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
          <img src={kinoteatr} alt="реклама ТВ Кинотеатр" />
          <img src={toshkent} alt="реклама ТВ Тошкент" />
          <img src={sport} alt="реклама ТВ Спорт" />
        </div>
        <div className="rowImgs">
          <img src={mahalla} alt="Реклама в Махалля" />
          <img src={ozbekiston24} alt="Реклама в Узбекистан24" />
          <img src={yoshlar} alt="Реклама в Ёшлар" />
        </div>
        <div className="rowImgs">
          <img src={navo} alt="Реклама на ТВ Наво" />
          <img src={oilaviy} alt="Реклама на ТВ Оилавий" />
          <img src={ozbekiston} alt="Реклама на ТВ Узбекистан" />
        </div>
      </div>

      <div className="channelsCards">
        <div className="cardsHolder">
          <Link to={"/zortv"}>
            <div className="cardRow">
              <h1>
                Размещение
                <br />
                на Зор тв
              </h1>
              <img src={zortv} alt="zo'r tv" />
            </div>
          </Link>

          <Link to={"/sevimlitv"}>
            <div className="cardRow">
              <h1>
                Размещение
                <br />
                на Севимли тв
              </h1>
              <img src={sevimli} alt="sevimli tv" />
            </div>
          </Link>

          <Link to={"/my5"}>
            <div className="cardRow">
              <h1>
                Размещение
                <br />
                на My5 тв
              </h1>
              <img src={my5} alt="mening yurtim" id="third" />
            </div>
          </Link>
        </div>

        <div className="cardsHolder">
          <Link to={"/outdoor-ads"}>
            <div className="cardRow">
              <h1>Наружные</h1>
              <img src={banner} alt="Баннерные рекламы" id="banner"/>
            </div>
          </Link>

          <Link to={"/bus-ads"}>
            <div className="cardRow">
              <h1>
                Автобусы
                <br />
                левых краях
              </h1>
              <img src={bus} alt="Автобусные рекламы" />
            </div>
          </Link>

          <Link to={"/led-ads"}>
            <div className="cardRow">
              <h1>Лед мониторинг</h1>
              <img src={led} alt="Лед Мониторинг" />
            </div>
          </Link>
        </div>

        <div className="cardsHolder">
          <Link to={"/banner-ads"}>
            <div className="cardRow">
              <h1>
                Баннеры
                <br />
                по низким ценам
              </h1>
              <img src={banner2} alt="Баннерные уличные рекламы" />
            </div>
          </Link>

          <Link to={"/radio-ads"}>
            <div className="cardRow">
              <h1>Радиореклама</h1>
              <img src={radio} alt="Радиорекламы" />
            </div>
          </Link>

          <Link to={"/cinema-ads"}>
            <div className="cardRow">
              <h1>
                Снимать
                <br />
                профессиональные
                <br /> видеоролики
              </h1>
              <img src={cinema} alt="Видео реклама" />
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
