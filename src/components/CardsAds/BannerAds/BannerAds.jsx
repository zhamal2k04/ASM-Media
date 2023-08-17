import React from "react";
import banner from "../../../Assets/Images/banner2.png"
import "./BannerAds.css"

const BannerAds = () => {
  return (
    <div className="adsCard-container">
      <div className="adsCard-title">
        <img src={banner} alt="bannerImg" id="banner-img" />
        <h1 style={{textAlign:'center'}}>Баннеры по низким ценам</h1>
      </div>
      <div className="adsCard-bgVideo" id="banner-bg"></div>
    </div>
  );
};

export default BannerAds;
