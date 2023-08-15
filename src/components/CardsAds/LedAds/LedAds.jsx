import React from "react";
import "./LedAds.css";
import led from "../../../Assets/Images/led.png";

const LedAds = () => {
  return (
    <div className="adsCard-container">
      <div className="adsCard-title">
        <img src={led} alt="/" id="led-img" />
        <h1>Лед мониторинг</h1>
      </div>
      <div className="adsCard-bgVideo" id="ledAds-bg"></div>
    </div>
  );
};

export default LedAds;
