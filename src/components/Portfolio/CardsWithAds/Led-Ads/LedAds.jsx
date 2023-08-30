import React from "react";
import "./LedAds.css";
import ledAds from "../../../../Assets/Images/ledAds2.jpg";
import ledAds2 from "../../../../Assets/Images/ledAds3.jpg";
import {MetaTags} from "react-meta-tags"

const Led_Ads = () => {
  return (
    <div className="ads-container">
      <MetaTags>
        <title>Лед-реклама от ASM-Media: Яркие и привлекательные рекламные дисплеи</title>
        <meta name="description" content="Размещение лед-рекламы на высоком уровне с ASM-Media. Привлекательные и яркие лед-дисплеи для вашей рекламы." />
        <meta name="keywords" content="лед реклама, размещение лед рекламы, яркие рекламные дисплеи, лед-панели, светодиодная реклама, led reklama, toshkent bo'ylab led reklama, led orqali reklama, led reklamalar" />
        <meta property="og:title" content="Лед-реклама от ASM-Media: Яркие и привлекательные рекламные дисплеи" />
        <meta property="og:description" content="Размещение лед-рекламы на высоком уровне с ASM-Media. Привлекательные и яркие лед-дисплеи для вашей рекламы." />
        <meta property="og:type" content="website"/>
      </MetaTags>
      <h1>Размещение лед-рекламы на высоком уровне с ASM-Media</h1>
      <h2>Лед-реклама от ASM-Media: Яркие и привлекательные рекламные дисплеи</h2>
      <img src={ledAds} alt="реклама лэд" />
      <img src={ledAds2} alt="лед" />
    </div>
  );
};

export default Led_Ads;
