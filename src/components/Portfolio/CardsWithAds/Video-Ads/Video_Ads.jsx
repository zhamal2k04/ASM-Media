import React from "react";
import "./Video_Ads.css";
import videoAds from "../../../../Assets/Videos/video-ads.mp4";
import { MetaTags } from "react-meta-tags";
import { useTranslation } from "react-i18next";
import ScrollButton from "../../../../UI/Button/ScrollButton";

const Video_Ads = () => {
  const {t} = useTranslation()
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
      <h1>{t('videoAds')}</h1>
      <h2>{t('videoDescription')}</h2>
      <video autoPlay muted loop>
        <source src={videoAds} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <ScrollButton/>
    </div>
  );
};

export default Video_Ads;
