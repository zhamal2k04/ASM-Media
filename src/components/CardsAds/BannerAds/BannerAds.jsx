import {React, useEffect} from "react";
import banner from "../../../Assets/Images/banner2.png"
import "./BannerAds.css"
import { MetaTags } from "react-meta-tags";
import ScrollButton from "../../../UI/Button/ScrollButton";
const BannerAds = () => {
  useEffect(() => {
    const canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://www.asm-media.uz/banner-ads');
    document.head.appendChild(canonicalLink);

    return () => {
      document.head.removeChild(canonicalLink);
    };
  }, []);
  return (
    <div className="adsCard-container">
       <MetaTags>
        <title>Размещение рекламы на баннерах с ASM-Media</title>
        <meta name="description" content="Размещение рекламы на баннерах с помощью ASM-Media. Привлекайте внимание аудитории с эффективными баннерами." />
        <meta name="keywords" content="размещение рекламы на баннерах, рекламные баннеры, реклама на баннерах, баннерная реклама, эффективные баннеры, banner reklama, bannerda reklama, effektiv banner reklama, bannerga reklama" />
        <meta property="og:title" content="Размещение рекламы на баннерах с ASM-Media" />
        <meta property="og:description" content="Привлекайте внимание аудитории с эффективными рекламными баннерами, размещенными с помощью ASM-Media." />
        <meta property="og:type" content="website"/>
      </MetaTags>
      <div className="adsCard-title">
        <img src={banner} alt="bannerImg" id="banner-img" />
        <h1 style={{textAlign:'center'}}>Баннеры по низким ценам</h1>
      </div>
      <div className="adsCard-bgVideo" id="banner-bg"></div>
      <ScrollButton/>
    </div>
  );
};

export default BannerAds;
