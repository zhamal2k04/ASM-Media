import {React,useEffect} from "react";
import "./LedAds.css";
import led from "../../../Assets/Images/led.png";
import {MetaTags} from "react-meta-tags"
import ScrollButton from "../../../UI/Button/ScrollButton";

const LedAds = () => {
  useEffect(() => {
    const canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://www.asm-media.uz/led-ads');
    document.head.appendChild(canonicalLink);

    return () => {
      document.head.removeChild(canonicalLink);
    };
  }, []);
  return (
    <div className="adsCard-container">
       <MetaTags>
        <title>Лед-реклама от ASM-Media: Яркие и привлекательные рекламные дисплеи</title>
        <meta name="description" content="Размещение лед-рекламы на высоком уровне с ASM-Media. Привлекательные и яркие лед-дисплеи для вашей рекламы." />
        <meta name="keywords" content="лед реклама, размещение лед рекламы, яркие рекламные дисплеи, лед-панели, светодиодная реклама, led reklama, toshkent bo'ylab led reklama, led orqali reklama, led reklamalar" />
        <meta property="og:title" content="Лед-реклама от ASM-Media: Яркие и привлекательные рекламные дисплеи" />
        <meta property="og:description" content="Размещение лед-рекламы на высоком уровне с ASM-Media. Привлекательные и яркие лед-дисплеи для вашей рекламы." />
        <meta property="og:type" content="website"/>
      </MetaTags>
      <div className="adsCard-title">
        <img src={led} alt="LedImg" id="led-img" />
        <h1>Лед мониторинг</h1>
      </div>
      <div className="adsCard-bgVideo" id="ledAds-bg"></div>
      <ScrollButton/>
    </div>
  );
};

export default LedAds;
