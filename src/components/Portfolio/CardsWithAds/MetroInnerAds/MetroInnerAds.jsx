import React from "react";
import "./MetroInnerAds.css"
import metroInner from "../../../../Assets/Images/metroInner_portfolio.jpg"
import metroInner2 from "../../../../Assets/Images/metroInner_portfolio2.jpg"

const MetroInnerAds = () => {
  return (
    <div className="ads-container" id="metroInner">
      <img src={metroInner} alt="баннерные реклама в метро" />
      <img src={metroInner2} alt="метро реклама баннер" />
    </div>
  );
};

export default MetroInnerAds;
