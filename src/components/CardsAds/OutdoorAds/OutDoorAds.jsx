import React from "react";
import "./OutDoorAds.css";
import banner from "../../../Assets/Images/banner.png"

const OutDoorAds = () => {
  return (
    <div className="adsCard-container">
      <div className="adsCard-title">
        <img src={banner} alt="/" id="outdoorAds-img"/>
        <h1>Наружные Рекламы</h1>
      </div>

      <div className="adsCard-bgVideo" id="outdoorAds-bg"></div>
    </div>
  );
};

export default OutDoorAds;
