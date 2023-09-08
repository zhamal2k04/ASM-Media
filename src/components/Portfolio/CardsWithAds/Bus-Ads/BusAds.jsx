import React from "react";
import "./BusAds.css";
import busAds from "../../../../Assets/Images/bus_portfolio2.jpg"
import busAds2 from "../../../../Assets/Images/bus_portfolio3.jpg"
import busAds3 from "../../../../Assets/Images/bus_portfolio4.jpg"
import busAds4 from "../../../../Assets/Images/bus_portfolio5.jpg"
import busAds5 from "../../../../Assets/Images/bus_portfolio6.jpg"
import busAds6 from "../../../../Assets/Images/bus_portfolio7.jpg"
import {MetaTags} from "react-meta-tags"
import ScrollButton from "../../../../UI/Button/ScrollButton";
import { useTranslation } from "react-i18next";

const Bus_Ads = () => {
    const {t} = useTranslation()

  return (
    
    <div className="ads-container" id="bus-ads"> 
        <MetaTags>
            <title>Реклама на автобусах: повышайте видимость своего бренда с ASM-Media</title>
            <meta name="description" content="Эффективная реклама на автобусах: повышайте видимость своего бренда с помощью рекламы на городском транспорте." />
            <meta property="og:title" content="Реклама на автобусах: повышайте видимость своего бренда с ASM-Media" />
            <meta property="og:description" content="Эффективная реклама на автобусах: повышайте видимость своего бренда с помощью рекламы на городском транспорте." />
            <meta name="keywords" content="реклама на автобусах, городская реклама, мобильная реклама, реклама на транспорте, развитие бизнеса, avtobus reklama, shahar reklama, mobil reklama, transportda reklama" />
            <meta property="og:type" content="website"/>
        </MetaTags>
        <h1>{t('BusAds')}</h1>
        <h2>{t('BusDescription')}</h2>
        <div className="AdsImagesHandler">
            <div className="rowAdsImgs">
                <img src={busAds} alt="автобусные рекламы" />
            </div>
            <div className="rowAdsImgs">
                <img src={busAds2} alt="рекламы в автобусе" />
            </div>
        </div>
        <div className="AdsImagesHandler">
            <div className="rowAdsImgs">
                <img src={busAds3} alt="автобус реклама" />
            </div>
            <div className="rowAdsImgs">
                <img src={busAds4} alt="скидка на автобусные рекламы" />
            </div>
        </div>
        <div className="AdsImagesHandler">
            <div className="rowAdsImgs">
                <img src={busAds5} alt="реклама в автобусных транспортах" />
            </div>
            <div className="rowAdsImgs">
                <img src={busAds6} alt="размещение автобусных реклам" />
            </div>
        </div>
        <ScrollButton/>
    </div>
  );
};

export default Bus_Ads;
