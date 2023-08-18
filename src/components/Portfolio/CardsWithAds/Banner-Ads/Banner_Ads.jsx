import React from 'react'
import "./Banner_Ads.css"
import banner from "../../../../Assets/Images/banner_portfolio.jpg"
import banner2 from "../../../../Assets/Images/banner_portfolio2.jpg"

const Banner_Ads = () => {
  return (
    <div className='ads-container'>
        <img src={banner} alt="размещение баннеры" />
        <img src={banner2} alt="релама баннеры" />
    </div>
  )
}

export default Banner_Ads