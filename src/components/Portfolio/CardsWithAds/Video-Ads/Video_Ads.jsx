import React from "react";
import "./Video_Ads.css";
import videoAds from "../../../../Assets/Videos/video-ads.mp4";
import { MetaTags } from "react-meta-tags";

const Video_Ads = () => {
  return (
    <div className="ads-container" id="video-container">
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
      <h1>Создание и съемка видеороликов | ASM-Media Рекламное агентство</h1>
      <h2>ASM-Media - ваш надежный партнер в сфере создания и съемки видеороликов. Профессиональные видео-сервисы для эффективной рекламы и продвижения бизнеса.</h2>
      <video autoPlay muted loop>
        <source src={videoAds} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video_Ads;
