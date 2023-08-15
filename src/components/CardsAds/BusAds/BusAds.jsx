import React from "react";
import bus from "../../../Assets/Images/bus.png";
import "./BusAds.css";

const BusAds = () => {
  return (
    <div className="adsCard-container">
      <div className="adsCard-title">
        <img src={bus} alt="/" id="bus-img" />
        <h1>Автобусы левых краях</h1>
      </div>

      <div className="adsCard-bgVideo" id="bus-bg"></div>
    </div>
  );
};

export default BusAds;
