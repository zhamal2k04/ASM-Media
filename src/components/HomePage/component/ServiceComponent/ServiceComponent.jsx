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
import { useTranslation } from "react-i18next";

const ServiceComponent = () => {
  const { t } = useTranslation();
  return (
    <div className="serviceComponent-container">
      <div className="serviceTitle">
        <h1>{t('serviceTitle')}</h1>
        <h2>{t('serviceSubTitle')}</h2>
        <h3>{t('serviceDescription')}</h3>
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
            <h1 style={{fontFamily: "IMPACT", letterSpacing: "0.25rem", fontWeight: "400"}}>
                {t('accomodation')}
                <br />
                {t('to')} {t('zortv')}
              </h1>
              <img src={zortv} alt="zo'r tv" />
            </div>
          </Link>

          <Link to={"/sevimlitv"}>
            <div className="cardRow">
            <h1 style={{fontFamily: "IMPACT", letterSpacing: "0.15rem", fontWeight: "400"}}>
                {t('accomodation')}
                <br />
                {t('to')} {t('sevimli')}
              </h1>
              <img src={sevimli} alt="sevimli tv" />
            </div>
          </Link>

          <Link to={"/my5"}>
            <div className="cardRow" id="thirdRow">
              <h1 style={{fontFamily: "IMPACT", letterSpacing: "0.25rem", fontWeight: "400", position:"relative", bottom:"20px"}}>
                {t('accomodation')}
                <br />
                {t('to')} {t('my5')}
              </h1>
              <img src={my5} alt="mening yurtim" id="third" />
            </div>
          </Link>
        </div>

        <div className="cardsHolder">
          <Link to={"/outdoor-ads"}>
            <div className="cardRow">
              <h1 style={{fontFamily: "IMPACT", letterSpacing: "0.25rem", fontWeight: "400"}}>
                {t('outdoor')}
              </h1>
              <img src={banner} alt="Баннерные рекламы" id="banner"/>
            </div>
          </Link>

          <Link to={"/bus-ads"}>
            <div className="cardRow">
              <h1 style={{fontFamily: "IMPACT", letterSpacing: "0.25rem", fontWeight: "400"}}>
                {t('busEdges')}
                <br />
              </h1>
              <img src={bus} alt="Автобусные рекламы" />
            </div>
          </Link>

          <Link to={"/led-ads"}>
            <div className="cardRow">
              <h1 style={{fontFamily: "IMPACT", letterSpacing: "0.25rem", fontWeight: "400", }}>
                {t('ledMonitoring')}
              </h1>
              <img src={led} alt="Лед Мониторинг" />
            </div>
          </Link>
        </div>

        <div className="cardsHolder">
          <Link to={"/banner-ads"}>
            <div className="cardRow">
              <h1 style={{fontFamily: "IMPACT", letterSpacing: "0.25rem", fontWeight: "400", position:"relative", bottom:"10px"}}>
               {t('banners')}
               <br />
               {t('bannerPrice')}
              </h1>
              <img src={banner2} alt="Баннерные уличные рекламы" />
            </div>
          </Link>

          <Link to={"/radio-ads"}>
            <div className="cardRow">
              <h1 style={{fontFamily: "IMPACT", letterSpacing: "0.25rem", fontWeight: "400", position:"relative", bottom:"10px"}}> 
                {t('radio')}
              </h1>
              <img src={radio} alt="Радиорекламы" />
            </div>
          </Link>

          <Link to={"/cinema-ads"}>
            <div className="cardRow">
             <h1 style={{fontFamily: "IMPACT", letterSpacing: "0.20rem", fontWeight: "400",position:"relative", bottom:"10px"}}> 
                {t('cinema')}
              </h1>
              <img src={cinema} alt="Видео реклама" />
            </div>
          </Link>
        </div>
        <div className="offers">
          <h1>
            {t('lowPrice')}
          </h1>
          <h2>
            {t('discount')}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
