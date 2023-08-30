import React from "react";
import "./MetroAds.css";
import metro_portfolio from "../../../../Assets/Images/metro_portfolio3.jpg"
import metro_portfolio2 from "../../../../Assets/Images/metro_portfolio4.jpg"
import {MetaTags} from "react-meta-tags"

const MetroAds = () => {
  return (
    
    <div className="ads-container">
        <MetaTags>
          <title>Размещение рекламы в вагонах метрополитена от ASM-Media: Эффективная реклама для вашего бренда</title>
          <meta name="description" content="Эффективное размещение рекламы в вагонах метрополитена. Привлекайте внимание аудитории с ASM-Media." />
          <meta name="keywords" content="реклама в метро, размещение рекламы в вагонах метрополитена, метрополитенная реклама, эффективная реклама, metro reklama, metroda reklama, metro vagonlarida reklama, metrapolitent reklama, effektiv metro reklama" />
          <meta property="og:title" content="Реклама в вагонах метрополитена от ASM-Media: Эффективная и привлекательная реклама" />
          <meta property="og:description" content="Эффективное размещение рекламы в вагонах метрополитена. Привлекайте внимание аудитории с ASM-Media." />
          <meta property="og:type" content="website"/>
        </MetaTags>
        <h1>Реклама в вагонах метрополитена от ASM-Media: Эффективная и привлекательная реклама</h1>
        <h2 id="metroSubTitle">Эффективное размещение рекламы в вагонах метрополитена. Привлекайте внимание аудитории с ASM-Media.</h2>
      <img src={metro_portfolio} alt="метро реклама" />
      <img src={metro_portfolio2} alt="метро" />
    </div>
  );
};

export default MetroAds;
