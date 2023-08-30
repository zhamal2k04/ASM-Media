import {React, useEffect} from "react";
import "./ZortvAds.css";
import zortv from "../../../Assets/Images/zortv.png";
import zortv_bgVideo from "../../../Assets/Videos/zortv_bg.mp4";
import ScrollButton from "../../../UI/Button/ScrollButton";

const ZortvAds = () => {
  useEffect(() => {
    const canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://www.asm-media.uz/zortv');
    document.head.appendChild(canonicalLink);

    return () => {
      document.head.removeChild(canonicalLink);
    };
  }, []);
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
      <ScrollButton/>
    </div>
  );
};

export default ZortvAds;
