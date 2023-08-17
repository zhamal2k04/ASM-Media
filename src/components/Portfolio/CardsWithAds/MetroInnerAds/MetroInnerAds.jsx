import React from "react";
import "./MetroInnerAds.css"
import metroInner from "../../../../Assets/Images/metroInner_portfolio.jpg"
import metroInner2 from "../../../../Assets/Images/metroInner_portfolio2.jpg"

const MetroInnerAds = () => {
  return (
    <div className="ads-container" id="metroInner">
      <img src={metroInner} alt="/metroInnerImg" />
      <img src={metroInner2} alt="/metroInnerImg2" />
    </div>
  );
};

export default MetroInnerAds;
