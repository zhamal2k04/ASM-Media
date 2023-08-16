import React from "react";
import "./Video_Ads.css";
import videoAds from "../../../../Assets/Videos/video-ads.mp4"

const Video_Ads = () => {
  return (
    <div className="ads-container" id='video-container'>
      <video autoPlay muted loop>
        <source src={videoAds} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video_Ads;
