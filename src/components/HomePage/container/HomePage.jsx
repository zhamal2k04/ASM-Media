import React from 'react'
import "./HomePage.css"
import MainCard from '../component/MainCard/MainCard'
import CenterComponent from '../component/CenterComponent/CenterComponent'
import ServiceComponent from '../component/ServiceComponent/ServiceComponent'
import og_img from  "../../../Assets/Images/footer-logo.jpg"

const HomePage = () => {
  return (
    <div className='homePage-container'>
        <meta name="description" content="Продвигайте свой бизнес с нами. Мы поможем вам рекламировать ваши товары и услуги." />
        <meta property="og:title" content="Рекламное агентство ASM-Media: Продвигайте свой бизнес с нами. С Нами всегда удобно!" />
        <meta property="og:description" content="Продвигайте свой бизнес с нами. Мы поможем вам рекламировать ваши товары и услуги." />
        <meta property="og:image" content={og_img} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <MainCard/>
        <CenterComponent/>
        <ServiceComponent/>
    </div>
  )
}

export default HomePage