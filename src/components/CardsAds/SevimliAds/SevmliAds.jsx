import {React, useEffect} from "react";
import sevimli from "../../../Assets/Images/sevimli.png"
import sevimli_bg from "../../../Assets/Videos/sevimli_bg.mp4"
import "./SevimliAds.css"
import ScrollButton from "../../../UI/Button/ScrollButton";

const SevmliAds = () => {
  useEffect(() => {
    const canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://www.asm-media.uz/sevimlitv');
    document.head.appendChild(canonicalLink);

    return () => {
      document.head.removeChild(canonicalLink);
    };
  }, []);
  return (
    <div className="adsCard-container">
      <div className="adsCard-title">
        <img src={sevimli} alt="SevimliImg" />
        <h1>Размещение на Зор тв</h1>
      </div>

      <div className="adsCard-bgVideo">
        <video autoPlay muted loop>
          <source src={sevimli_bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <ScrollButton/>
    </div>
  );
};

export default SevmliAds;
