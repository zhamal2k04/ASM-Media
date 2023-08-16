import React from "react";
import "./AboutPage.css";
import MainComponent from "../components/MainComponent/MainComponent";
import JobsDone from "../components/JobsDone/JobsDone";
import Channels from "../components/Channels/Channels";
import AdsCards from "../components/AdsCards/AdsCards";
import LowerCard from "../components/LowerCard/LowerCard";
import og_img from "../../../Assets/Images/footer-logo.jpg"

const AboutPage = () => {
  return (
    <div className="aboutPage-container">
        <meta name="description" content="Узнайте больше о нашей команде и как мы помогаем клиентам достигать успеха в сфере рекламы." />
        <meta property="og:title" content="О нас - Рекламное агентство ASM-Media." />
        <meta property="og:description" content="Узнайте больше о нашей команде и как мы помогаем клиентам достигать успеха в сфере рекламы." />
        <meta property="og:image" content={og_img} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <MainComponent/>
        <JobsDone/>
        <Channels/>
        <AdsCards/>
        <LowerCard/>
    </div>
  );
};

export default AboutPage;
