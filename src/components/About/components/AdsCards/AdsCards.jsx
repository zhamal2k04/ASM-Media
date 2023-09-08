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
import { useTranslation } from "react-i18next";

const AdsCards = () => {
  const {t} = useTranslation()

  return (
    <div className="adsCards-container" id="aboutPage-adsContainer">
      <div className="channelsCards" id="aboutPage-channelCards">
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
            <h1 style={{fontFamily: "IMPACT", letterSpacing: "0.25rem", fontWeight: "400"}}>
                {t('accomodation')}
                <br />
                {t('to')} {t('sevimli')}
              </h1>
              <img src={sevimli} alt="sevimli tv" />
            </div>
          </Link>

          <Link to={"/my5"}>
            <div className="cardRow">
              <h1 style={{fontFamily: "IMPACT", letterSpacing: "0.25rem", fontWeight: "400", position:"relative", bottom:"40px"}}>
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
      </div>
    </div>
  );
};

export default AdsCards;
