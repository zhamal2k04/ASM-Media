import {React, useEffect} from "react";
import radio from "../../../Assets/Images/radio.png";
import "./RadioAds.css";
import ScrollButton from "../../../UI/Button/ScrollButton";

const RadioAds = () => {
  useEffect(() => {
    const canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://www.asm-media.uz/radio-ads');
    document.head.appendChild(canonicalLink);

    return () => {
      document.head.removeChild(canonicalLink);
    };
  }, []);
  return (
    <div className="adsCard-container">
      <div className="adsCard-title">
        <img src={radio} alt="RadioImg" id="radio-img" />
        <h1 style={{ textAlign: "center" }}>Радиореклама</h1>
      </div>
      <div className="adsCard-bgVideo" id="radio-bg"></div>
      <ScrollButton/>
    </div>
  );
};

export default RadioAds;
