import {React, useEffect} from "react";
import "./OutDoorAds.css";
import banner from "../../../Assets/Images/banner.png";
import ScrollButton from "../../../UI/Button/ScrollButton";

const OutDoorAds = () => {
  useEffect(() => {
    const canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://www.asm-media.uz/outdoor-ads');
    document.head.appendChild(canonicalLink);

    return () => {
      document.head.removeChild(canonicalLink);
    };
  }, []);
  return (
    <div className="adsCard-container">
      <div className="adsCard-title">
        <img src={banner} alt="BannerImg" id="outdoorAds-img" />
        <h1>Наружные Рекламы</h1>
      </div>

      <div className="adsCard-bgVideo" id="outdoorAds-bg"></div>
      <ScrollButton/>
    </div>
  );
};

export default OutDoorAds;
