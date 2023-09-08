import React from "react";
import "./LedAds.css";
import ledAds from "../../../../Assets/Images/ledAds2.jpg";
import ledAds2 from "../../../../Assets/Images/ledAds3.jpg";
import {MetaTags} from "react-meta-tags"
import ScrollButton from "../../../../UI/Button/ScrollButton";
import { useTranslation } from "react-i18next";

const Led_Ads = () => {
  const {t} = useTranslation()
  return (
    <div className="ads-container">
      <MetaTags>
        <title>Лед-реклама от ASM-Media: Яркие и привлекательные рекламные дисплеи</title>
        <meta name="description" content="Размещение лэд-рекламы на высоком уровне с ASM-Media. Привлекательные и яркие лед-дисплеи для вашей рекламы." />
        <meta name="keywords" content="лэд реклама, размещение лед рекламы, яркие рекламные дисплеи, лед-панели, светодиодная реклама, led reklama, toshkent bo'ylab led reklama, led orqali reklama, led reklamalar" />
        <meta property="og:title" content="Лед-реклама от ASM-Media: Яркие и привлекательные рекламные дисплеи" />
        <meta property="og:description" content="Размещение лед-рекламы на высоком уровне с ASM-Media. Привлекательные и яркие лед-дисплеи для вашей рекламы." />
        <meta property="og:type" content="website"/>
      </MetaTags>
      <h1>{t('ledAds')}</h1>
      <h2>{t('ledDescription')}</h2>
      <img src={ledAds} alt="реклама лэд" />
      <img src={ledAds2} alt="лед" />
      <ScrollButton/>
    </div>
  );
};

export default Led_Ads;
