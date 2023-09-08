import {React} from 'react'
import "./HomePage.css"
import MainCard from '../component/MainCard/MainCard'
import CenterComponent from '../component/CenterComponent/CenterComponent'
import ServiceComponent from '../component/ServiceComponent/ServiceComponent'
import og_img from  "../../../Assets/Images/footer-logo.jpg"
import { useEffect } from 'react'
import { MetaTags } from 'react-meta-tags'

const HomePage = () => {
  useEffect(() => {
    const canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://www.asm-media.uz/')
    document.head.appendChild(canonicalLink);
    return () => {
      document.head.removeChild(canonicalLink);
    };
  }, []);
  return (
    <div className='homePage-container'>
        <MetaTags>
          <title>Рекламное агентство ASM-Media</title>
          <meta name="description" content="Продвигайте свой бизнес с нами. Мы поможем вам рекламировать ваши товары и услуги." />
          <meta property="og:title" content="Рекламное агентство ASM-Media: Продвигайте свой бизнес с нами. С Нами всегда удобно!" />
          <meta property="og:description" content="Продвигайте свой бизнес с нами. Мы поможем вам рекламировать ваши товары и услуги." />
          <meta name='keywords' content='рекламное агентство, реклама для продвижение бизнеса, рекламы всех видов, реклама в Узбекистане, размещене всех типов реклам, reklama agentligi, biznes yurgizish uchun reklama, barcha turdagi reklama, O`zbekistonda bo`ylab reklama, barcha turdagi reklamalarni tayyorlash '/>
          <meta property='og:type' content='website'/>
          <meta property="og:image" content={og_img} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </MetaTags>
        <MainCard/>
        <CenterComponent/>
        <ServiceComponent/>
    </div>
  )
}

export default HomePage