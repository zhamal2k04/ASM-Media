import React from "react";
import "./ZortvAds.css";
import zortv from "../../../Assets/Images/zortv.png";
import zortv_bgVideo from "../../../Assets/Videos/zortv_bg.mp4";

const ZortvAds = () => {
  return (
    <div className="adsCard-container">
      <div className="adsCard-title">
        <img src={zortv} alt="ZorTvImg" />
        <h1>Размещение на Зор тв</h1>
      </div>

      <div className="adsCard-bgVideo">
        <video autoPlay muted loop>
          <source src={zortv_bgVideo} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ZortvAds;
