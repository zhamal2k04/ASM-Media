import {React, useEffect} from "react";
import my5 from "../../../Assets/Images/my5.png"
import my5_bg from "../../../Assets/Videos/my5_bg.mp4"
import "./My5Ads.css"
import {MetaTags} from "react-meta-tags"
import ScrollButton from "../../../UI/Button/ScrollButton";

const My5Ads = () => {
  useEffect(() => {
    const canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://www.asm-media.uz/my5');
    document.head.appendChild(canonicalLink);

    return () => {
      document.head.removeChild(canonicalLink);
    };
  }, []);
  return (
    <div className="adsCard-container">
      <MetaTags>
        <title>Размещение рекламы на телеканале My5 - ASM-Media</title>
        <meta
          name="description"
          content="ASM-Media предлагает эффективное размещение рекламы на популярном телеканале My5. Привлекайте аудиторию и продвигайте свои товары и услуги."
        />
        <meta
          name="keywords"
          content="Размещение рекламы, телеканал My5, реклама на телевидении, медийные решения, рекламное агентство, reklama joylash, telekanal my5, mening yurtim, mening yurtim telekanali, mediaga oid reklama"
        />
        <meta
          property="og:title"
          content="Размещение рекламы на телеканале My5 - ASM-Media"
        />
        <meta
          property="og:description"
          content="ASM-Media предлагает эффективное размещение рекламы на популярном телеканале My5. Привлекайте аудиторию и продвигайте свои товары и услуги."
        />
      </MetaTags>
      <div className="adsCard-title">
        <img src={my5} alt="My5Img" id='my5_img'/>
        <h1>Размещение на My5 тв</h1>
      </div>

      <div className="adsCard-bgVideo">
        <video autoPlay muted loop>
          <source src={my5_bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <ScrollButton/>
    </div>
  );
};

export default My5Ads;
