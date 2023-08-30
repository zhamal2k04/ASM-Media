import {React, useEffect} from "react";
import bus from "../../../Assets/Images/bus.png";
import "./BusAds.css";
import {MetaTags} from "react-meta-tags"
import ScrollButton from "../../../UI/Button/ScrollButton";

const BusAds = () => {
  useEffect(() => {
    const canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://www.asm-media.uz/bus-ads');
    document.head.appendChild(canonicalLink);

    return () => {
      document.head.removeChild(canonicalLink);
    };
  }, []);
  return (
    <div className="adsCard-container">
        <MetaTags>
            <title>Реклама на автобусах: повышайте видимость своего бренда с ASM-Media</title>
            <meta name="description" content="Эффективная реклама на автобусах: повышайте видимость своего бренда с помощью рекламы на городском транспорте." />
            <meta property="og:title" content="Реклама на автобусах: повышайте видимость своего бренда с ASM-Media" />
            <meta property="og:description" content="Эффективная реклама на автобусах: повышайте видимость своего бренда с помощью рекламы на городском транспорте." />
            <meta name="keywords" content="реклама на автобусах, городская реклама, мобильная реклама, реклама на транспорте, развитие бизнеса, avtobus reklama, shahar reklama, mobil reklama, transportda reklama" />
            <meta property="og:type" content="website"/>
        </MetaTags>
      <div className="adsCard-title">
        <img src={bus} alt="BusImg" id="bus-img" />
        <h1>Автобусы левых краях</h1>
      </div>

      <div className="adsCard-bgVideo" id="bus-bg"></div>
      <ScrollButton/>
    </div>
  );
};

export default BusAds;
