import React from 'react'
import "./Banner_Ads.css"
import banner from "../../../../Assets/Images/banner_portfolio.jpg"
import banner2 from "../../../../Assets/Images/banner_portfolio2.jpg"
import {MetaTags} from "react-meta-tags"
import { useTranslation } from 'react-i18next'
import ScrollButton from '../../../../UI/Button/ScrollButton'
const Banner_Ads = () => {
  const {t} = useTranslation()
  return (
    <div className='ads-container'>
      <MetaTags>
        <title>Размещение рекламы на баннерах с ASM-Media</title>
        <meta name="description" content="Размещение рекламы на баннерах с помощью ASM-Media. Привлекайте внимание аудитории с эффективными баннерами." />
        <meta name="keywords" content="размещение рекламы на баннерах, рекламные баннеры, реклама на баннерах, баннерная реклама, эффективные баннеры, banner reklama, bannerda reklama, effektiv banner reklama, bannerga reklama" />
        <meta property="og:title" content="Размещение рекламы на баннерах с ASM-Media" />
        <meta property="og:description" content="Привлекайте внимание аудитории с эффективными рекламными баннерами, размещенными с помощью ASM-Media." />
        <meta property="og:type" content="website"/>
      </MetaTags>
        <h1>{t('bannerAds')}</h1>
        <h2>{t('bannerDescription')}</h2>
        <img src={banner} alt="размещение баннеры" />
        <img src={banner2} alt="баннерные рекламы" />
        <ScrollButton/>
    </div>
  )
}

export default Banner_Ads;