import React from "react";
import "./BusAds.css";
import busAds from "../../../../Assets/Images/bus_portfolio2.jpg"
import busAds2 from "../../../../Assets/Images/bus_portfolio3.jpg"
import busAds3 from "../../../../Assets/Images/bus_portfolio4.jpg"
import busAds4 from "../../../../Assets/Images/bus_portfolio5.jpg"
import busAds5 from "../../../../Assets/Images/bus_portfolio6.jpg"
import busAds6 from "../../../../Assets/Images/bus_portfolio7.jpg"


const Bus_Ads = () => {
  return (
    <div className="ads-container" id="bus-ads">
        <div className="AdsImagesHandler">
            <div className="rowAdsImgs">
                <img src={busAds} alt="busAdsImg" />
            </div>
            <div className="rowAdsImgs">
                <img src={busAds2} alt="busAdsImg--2" />
            </div>
        </div>
        <div className="AdsImagesHandler">
            <div className="rowAdsImgs">
                <img src={busAds3} alt="busAdsImg--3" />
            </div>
            <div className="rowAdsImgs">
                <img src={busAds4} alt="busAdsImg--4" />
            </div>
        </div>
        <div className="AdsImagesHandler">
            <div className="rowAdsImgs">
                <img src={busAds5} alt="busAdsImg--5" />
            </div>
            <div className="rowAdsImgs">
                <img src={busAds6} alt="busAdsImg--6" />
            </div>
        </div>
    </div>
  );
};

export default Bus_Ads;
