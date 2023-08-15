import React from "react";
import "./CinemaAds.css";
import cinema from "../../../Assets/Images/cinema.png";

const CinemaAds = () => {
  return (
    <div className="adsCard-container">
      <div className="adsCard-title">
        <img src={cinema} alt="/" id="cinema-img" />
        <h1 style={{ textAlign: "center" }}>
          Снимать профессиональные видеоролики
        </h1>
      </div>
      <div className="adsCard-bgVideo" id="cinema-bg"></div>
    </div>
  );
};

export default CinemaAds;
