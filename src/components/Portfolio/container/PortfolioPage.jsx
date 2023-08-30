import {React, useEffect} from 'react'
import "./PortfolioPage.css"
import MainComponent from '../components/MainComponent/MainComponent'
import PortfolioCards from '../components/PortfolioCards/PortfolioCards'
import LowerCard from '../components/LowerCard/LowerCard'
import og_img from "../../../Assets/Images/footer-logo.jpg"
import { MetaTags } from 'react-meta-tags'
import ScrollButton from '../../../UI/Button/ScrollButton'

const PortfolioPage = () => {
  useEffect(() => {
    const canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://www.asm-media.uz/portfolio');
    document.head.appendChild(canonicalLink);

    return () => {
      document.head.removeChild(canonicalLink);
    };
  }, []);
  return (
    <div className='portfolioPage-container'>
        <MetaTags>
          <title>Портфолио - Рекламное агентство ASM-Media</title>
          <meta name="description" content="Посмотрите наши успешные кейсы и примеры работы с клиентами в различных сферах бизнеса." />
          <meta property="og:title" content="Портфолио - Рекламное агентство ASM-Media" />
          <meta property="og:description" content="Посмотрите наши успешные кейсы и примеры работы с клиентами в различных сферах бизнеса." />
          <meta property='og:type' content='website'/>
          <meta name='keywords' content='Портфолио, портфолио, проекты, Проекты, рекламные кампании, видеоролики, медийные решения, реклама, portfolio, Portfolio, proektlar, Proektlar, reklama kompaniyalar, videoroliklar, media yechimlari, reklama, proektlar'/>
          <meta property="og:image" content={og_img} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </MetaTags>
          <h1>Портфолио - Рекламное агентство ASM-Media</h1>
          <h2>Посмотрите наши успешные кейсы и примеры работы с клиентами в различных сферах бизнеса.</h2>
        <MainComponent/>
        <PortfolioCards/>
        <LowerCard/>
        <ScrollButton/>
    </div>
  )
}

export default PortfolioPage