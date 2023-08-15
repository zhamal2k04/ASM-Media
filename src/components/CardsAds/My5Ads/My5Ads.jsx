import React from "react";
import my5 from "../../../Assets/Images/my5.png"
import my5_bg from "../../../Assets/Videos/my5_bg.mp4"
import "./My5Ads.css"

const My5Ads = () => {
  return (
    <div className="adsCard-container">
      <div className="adsCard-title">
        <img src={my5} alt="/" id='my5_img'/>
        <h1>Размещение на My5 тв</h1>
      </div>

      <div className="adsCard-bgVideo">
        <video autoPlay muted loop>
          <source src={my5_bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default My5Ads;
