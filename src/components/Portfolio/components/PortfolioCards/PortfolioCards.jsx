import React from 'react'
import "./PortfolioCards.css"
import bannerAds from "../../../../Assets/Images/banner_portfolio.jpg"
import videoAds from "../../../../Assets/Images/video_portfolio.jpg"
import ledAds from "../../../../Assets/Images/led_portfolio.jpg"
import busAds from "../../../../Assets/Images/bus_portfolio.jpg"
import metroAds from "../../../../Assets/Images/metro_portfolio.jpg"
import metroAds2 from "../../../../Assets/Images/metro_portfolio2.jpg"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const PortfolioCards = () => {
  const {t} = useTranslation()
  return (
    <div className='portfolioCards-container'>
        <div className="simpleCardHolder">
            <div className="cardsRow">
              <div className="card-img">
                <img src={bannerAds} alt="размещение баннеры" />
                <Link to={"/ads-banner"}>{t('portfolioCard')}</Link>
              </div>
              <div className="card-img">
                <img src={videoAds} alt="видео реклама" />
                <Link to={"/ads-video"}>{t('portfolioCard')}</Link>
              </div>
              <div className="card-img">
                <img src={ledAds} alt="реклама лэд" />
                <Link to={"/ads-led"}>{t('portfolioCard')}</Link>
              </div>
            </div>
            <div className="cardsRow">
                <div className="card-img">
                    <img src={busAds} alt="автобусные рекламы" />
                    <Link to={"/ads-bus"}>{t('portfolioCard')}</Link>
                </div>
                <div className="card-img">
                    <img src={metroAds} alt="реклама в метро" />
                    <Link to={'/ads-metro'}>{t('portfolioCard')}</Link>
                </div>
                <div className="card-img">
                    <img src={metroAds2} alt="реклама баннер в метро" />
                    <Link to={"/ads-metro-inner"}>{t('portfolioCard')}</Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default PortfolioCards