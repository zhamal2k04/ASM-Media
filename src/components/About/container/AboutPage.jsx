import {React, useEffect} from "react";
import "./AboutPage.css";
import MainComponent from "../components/MainComponent/MainComponent";
import JobsDone from "../components/JobsDone/JobsDone";
import Channels from "../components/Channels/Channels";
import AdsCards from "../components/AdsCards/AdsCards";
import LowerCard from "../components/LowerCard/LowerCard";
import og_img from "../../../Assets/Images/footer-logo.jpg"
import MetaTags from "react-meta-tags";
import ScrollButton from "../../../UI/Button/ScrollButton";

const AboutPage = () => {
  useEffect(() => {
    const canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://www.asm-media.uz/about');
    document.head.appendChild(canonicalLink);

    return () => {
      document.head.removeChild(canonicalLink);
    };
  }, []);

  return (
    <div className="aboutPage-container">
       <MetaTags>
          <title>О нас - Рекламное агентство ASM-Media</title>
          <meta name="description" content="Узнайте больше о нашей команде и как мы помогаем клиентам достигать успеха в сфере рекламы." />
          <meta property="og:title" content="О нас - Рекламное агентство ASM-Media." />
          <meta property="og:description" content="Узнайте больше о нашей команде и как мы помогаем клиентам достигать успеха в сфере рекламы." />
          <meta property="og:image" content={og_img} />
          <meta name="keywords" content="ASM-Media, рекламное агентство, реклама, продвижение бизнеса, медиа, контент, размещение рекламы, asm-media, asm media, reklama agentligi, biznes rivojlantirish, media, kontent, reklama joylash"/>
          <meta property='og:type' content='website'/>
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
       </MetaTags>
        <MainComponent/>
        <JobsDone/>
        <Channels/>
        <AdsCards/>
        <LowerCard/>
        <ScrollButton/>
    </div>
  );
};

export default AboutPage;
