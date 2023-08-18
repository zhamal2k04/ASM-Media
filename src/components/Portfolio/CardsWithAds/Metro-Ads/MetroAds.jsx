import React from "react";
import "./MetroAds.css";
import metro_portfolio from "../../../../Assets/Images/metro_portfolio3.jpg"
import metro_portfolio2 from "../../../../Assets/Images/metro_portfolio4.jpg"

const MetroAds = () => {
  return (
    <div className="ads-container">
      <img src={metro_portfolio} alt="метро реклама" />
      <img src={metro_portfolio2} alt="метро" />
    </div>
  );
};

export default MetroAds;
