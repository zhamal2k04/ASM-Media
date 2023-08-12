import React from 'react'
import "./PortfolioCards.css"
import busAds from "../../../../Assets/Images/busAds.jpg"
import busAds2 from "../../../../Assets/Images/busAds2.jpg"
import busAds3 from "../../../../Assets/Images/busAds3.jpg"
import metroAds from "../../../../Assets/Images/metroAds.jpg"
import metroAds2 from "../../../../Assets/Images/metroAds2.jpg"
import metroAds3 from "../../../../Assets/Images/metroAds3.jpg"
import metroAds4 from "../../../../Assets/Images/metroAds4.jpg"
import metroAds5 from "../../../../Assets/Images/metroAds5.jpg"
import metroAds6 from "../../../../Assets/Images/metroADs6.jpg"

const PortfolioCards = () => {
  return (
    <div className='portfolioCards-container'>
        <div className="simpleCardHolder">
            <div className="cardsRow">
              <div className="card-img">
                <img src={busAds} alt="/" />
              </div>
              <div className="card-img">
                <img src={busAds2} alt="/" />
              </div>
              <div className="card-img">
                <img src={busAds3} alt="/" />
              </div>
            </div>
            <div className="cardsRow">
                <div className="card-img">
                    <img src={metroAds} alt="/" />
                </div>
                <div className="card-img">
                    <img src={metroAds2} alt="/" />
                </div>
                <div className="card-img">
                    <img src={metroAds3} alt="/" />
                </div>
            </div>
            <div className="cardsRow">
                <div className="card-img">
                    <img src={metroAds4} alt="/" />
                </div>
                <div className="card-img">
                    <img src={metroAds5} alt="/" />
                </div>
                <div className="card-img">
                    <img src={metroAds6} alt="/" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PortfolioCards