import {React,useEffect} from "react";
import "./CinemaAds.css";
import cinema from "../../../Assets/Images/cinema.png";
import {MetaTags} from "react-meta-tags"
import ScrollButton from "../../../UI/Button/ScrollButton";

const CinemaAds = () => {
  useEffect(() => {
    const canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://www.asm-media.uz/cinema-ads');
    document.head.appendChild(canonicalLink);

    return () => {
      document.head.removeChild(canonicalLink);
    };
  }, []);
  return (
    <div className="adsCard-container">
       <MetaTags>
        <title>
          Создание и съемка видеороликов | ASM-Media Рекламное агентство
        </title>
        <meta
          name="description"
          content="ASM-Media - ваш надежный партнер в сфере создания и съемки видеороликов. Профессиональные видео-сервисы для эффективной рекламы и продвижения бизнеса."
        />
        <meta
          name="keywords"
          content="создание видеороликов, съемка видео, рекламное видео, видеоролики для бизнеса, видео-продакшн, video reklama, reklamaga video olish, video syomka, reklama roliklar, biznes uchun videoroliklar"
        />
        <meta
          property="og:title"
          content="Создание и съемка видеороликов | ASM-Media Рекламное агентство"
        />
        <meta
          property="og:description"
          content="ASM-Media - ваш надежный партнер в сфере создания и съемки видеороликов. Профессиональные видео-сервисы для эффективной рекламы и продвижения бизнеса."
        />
        <meta property="og:type" content="website" />
      </MetaTags>
      <div className="adsCard-title">
        <img src={cinema} alt="CinemaImg" id="cinema-img" />
        <h1 style={{ textAlign: "center" }}>
          Снимать профессиональные видеоролики
        </h1>
      </div>
      <div className="adsCard-bgVideo" id="cinema-bg"></div>
      <ScrollButton/>
    </div>
  );
};

export default CinemaAds;
