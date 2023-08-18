import React from 'react'
import "./PortfolioCards.css"
import bannerAds from "../../../../Assets/Images/banner_portfolio.jpg"
import videoAds from "../../../../Assets/Images/video_portfolio.jpg"
import ledAds from "../../../../Assets/Images/led_portfolio.jpg"
import busAds from "../../../../Assets/Images/bus_portfolio.jpg"
import metroAds from "../../../../Assets/Images/metro_portfolio.jpg"
import metroAds2 from "../../../../Assets/Images/metro_portfolio2.jpg"
import { Link } from 'react-router-dom'


const PortfolioCards = () => {
  return (
    <div className='portfolioCards-container'>
        <div className="simpleCardHolder">
            <div className="cardsRow">
              <div className="card-img">
                <img src={bannerAds} alt="размещение баннеры" />
                <Link to={"/ads-banner"}>More »</Link>
              </div>
              <div className="card-img">
                <img src={videoAds} alt="видео реклама" />
                <Link to={"/ads-video"}>More »</Link>
              </div>
              <div className="card-img">
                <img src={ledAds} alt="реклама лэд" />
                <Link to={"/ads-led"}>More »</Link>
              </div>
            </div>
            <div className="cardsRow">
                <div className="card-img">
                    <img src={busAds} alt="автобусные рекламы" />
                    <Link to={"/ads-bus"}>More »</Link>
                </div>
                <div className="card-img">
                    <img src={metroAds} alt="реклама в метро" />
                    <Link to={'/ads-metro'}>More »</Link>
                </div>
                <div className="card-img">
                    <img src={metroAds2} alt="реклама баннер в метро" />
                    <Link to={"/ads-metro-inner"}>More »</Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default PortfolioCards