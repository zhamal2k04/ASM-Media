import React from "react";
import "./LedAds.css";
import ledAds from "../../../../Assets/Images/ledAds2.jpg";
import ledAds2 from "../../../../Assets/Images/ledAds3.jpg";

const Led_Ads = () => {
  return (
    <div className="ads-container">
      <img src={ledAds} alt="реклама лэд" />
      <img src={ledAds2} alt="лед" />
    </div>
  );
};

export default Led_Ads;