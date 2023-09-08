import {React, useEffect} from 'react'
import "./Contacts.css"
import MainComponent from '../components/MainComponent/MainComponent'
import Location from '../components/Location/Location'
import LocationCard from "../components/Leaflet/LocationCard"
import LowerCard from '../../Portfolio/components/LowerCard/LowerCard'
import og_img from "../../../Assets/Images/footer-logo.jpg"
import MetaTags from "react-meta-tags"
import ScrollButton from '../../../UI/Button/ScrollButton'

const Contacts = () => {
  useEffect(() => {
    const canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://www.asm-media.uz/contacts');
    document.head.appendChild(canonicalLink);

    return () => {
      document.head.removeChild(canonicalLink);
    };
  }, []);
  return (
    <div className='contacts-container'>
        <MetaTags>
        <title>Контакты - Рекламное агентство ASM-Media</title>
          <meta name="description" content="Свяжитесь с нами для получения бесплатной консультации и обсуждения ваших рекламных потребностей. Мы всегда рады помочь вам!" />
          <meta property="og:title" content="Контакты - Рекламное агентство ASM-Media" />
          <meta property="og:description" content="Свяжитесь с нами для получения бесплатной консультации и обсуждения ваших рекламных потребностей. Мы всегда рады помочь вам!" />
          <meta name='keywords' content='контакты asm media, контактные номеры asm media, бесплатная концультация в asm media, asm media kontaktlari, asm media kontakt raqamlari, bepul konsultatsiya asm mediada'/>
          <meta property='og:type' content='website'/>
          <meta property="og:image" content={og_img} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </MetaTags>
        <MainComponent/>
        <Location/>
        <LocationCard/>
        <LowerCard/>
        <ScrollButton/>
    </div>
  )
}

export default Contacts