import React from 'react'
import "./PortfolioPage.css"
import MainComponent from '../components/MainComponent/MainComponent'
import PortfolioCards from '../components/PortfolioCards/PortfolioCards'
import LowerCard from '../components/LowerCard/LowerCard'
import og_img from "../../../Assets/Images/footer-logo.jpg"

const PortfolioPage = () => {
  return (
    <div className='portfolioPage-container'>
        <meta name="description" content="Посмотрите наши успешные кейсы и примеры работы с клиентами в различных сферах бизнеса." />
        <meta property="og:title" content="Портфолио - Рекламное агентство ASM-Media" />
        <meta property="og:description" content="Посмотрите наши успешные кейсы и примеры работы с клиентами в различных сферах бизнеса." />
        <meta property="og:image" content={og_img} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <MainComponent/>
        <PortfolioCards/>
        <LowerCard/>
    </div>
  )
}

export default PortfolioPage