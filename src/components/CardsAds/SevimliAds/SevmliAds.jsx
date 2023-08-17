import React from "react";
import sevimli from "../../../Assets/Images/sevimli.png"
import sevimli_bg from "../../../Assets/Videos/sevimli_bg.mp4"
import "./SevimliAds.css"

const SevmliAds = () => {
  return (
    <div className="adsCard-container">
      <div className="adsCard-title">
        <img src={sevimli} alt="SevimliImg" />
        <h1>Размещение на Зор тв</h1>
      </div>

      <div className="adsCard-bgVideo">
        <video autoPlay muted loop>
          <source src={sevimli_bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default SevmliAds;
