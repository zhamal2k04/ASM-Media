import React from "react";
import "./MetroInnerAds.css"
import metroInner from "../../../../Assets/Images/metroInner_portfolio.jpg"
import metroInner2 from "../../../../Assets/Images/metroInner_portfolio2.jpg"
import ScrollButton from "../../../../UI/Button/ScrollButton";

const MetroInnerAds = () => {
  return (
    <div className="ads-container" id="metroInner">
       <title>Размещение рекламы на мониторах внутри вагона метро: ASM-Media - ваш бренд в движении</title>
        <meta name="description" content="Привлекайте внимание аудитории с эффективным размещением рекламы на мониторах в метро от ASM-Media." />
        <meta name="keywords" content="реклама на мониторах вагона, размещение рекламы в метрополитене, мониторная реклама, эффективная реклама, эффективная реклама в ташкенте, metro monitoriga reklama, reklama metro monitoriga, metropoliten reklama, effektiv metro reklama, metro reklama toshkentda" />
        <meta property="og:title" content="Реклама на мониторах внутри вагона метро: ASM-Media - ваш бренд в движении" />
        <meta property="og:description" content="Привлекайте внимание аудитории с эффективным размещением рекламы на мониторах в метро от ASM-Media." />
        <meta property="og:type" content="website"/>
        <h1>Реклама на мониторах внутри вагона метро: ASM-Media - ваш бренд в движении</h1>
        <h2>Привлекайте внимание аудитории с эффективным размещением рекламы на мониторах в метро от ASM-Media.</h2>
      <img src={metroInner} alt="баннерные реклама в метро" />
      <img src={metroInner2} alt="метро реклама баннер" />
      <ScrollButton/>
    </div>
  );
};

export default MetroInnerAds;
