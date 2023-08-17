import React from "react";
import radio from "../../../Assets/Images/radio.png";
import "./RadioAds.css";

const RadioAds = () => {
  return (
    <div className="adsCard-container">
      <div className="adsCard-title">
        <img src={radio} alt="RadioImg" id="radio-img" />
        <h1 style={{ textAlign: "center" }}>Радиореклама</h1>
      </div>
      <div className="adsCard-bgVideo" id="radio-bg"></div>
    </div>
  );
};

export default RadioAds;
