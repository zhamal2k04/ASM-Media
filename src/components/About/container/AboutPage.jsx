import React from "react";
import "./AboutPage.css";
import MainComponent from "../components/MainComponent/MainComponent";
import JobsDone from "../components/JobsDone/JobsDone";
import Channels from "../components/Channels/Channels";
import AdsCards from "../components/AdsCards/AdsCards";
import LowerCard from "../components/LowerCard/LowerCard";

const AboutPage = () => {
  return (
    <div className="aboutPage-container">
        <MainComponent/>
        <JobsDone/>
        <Channels/>
        <AdsCards/>
        <LowerCard/>
    </div>
  );
};

export default AboutPage;
