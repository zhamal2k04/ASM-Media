import React from 'react'
import "./Contacts.css"
import MainComponent from '../components/MainComponent/MainComponent'
import Location from '../components/Location/Location'
import LocationCard from "../components/Leaflet/LocationCard"
import LowerCard from '../../Portfolio/components/LowerCard/LowerCard'
import og_img from "../../../Assets/Images/footer-logo.jpg"

const Contacts = () => {
  return (
    <div className='contacts-container'>
        <meta name="description" content="Свяжитесь с нами для получения бесплатной консультации и обсуждения ваших рекламных потребностей. Мы всегда рады помочь вам!" />
        <meta property="og:title" content="Контакты - Рекламное агентство ASM-Media" />
        <meta property="og:description" content="Свяжитесь с нами для получения бесплатной консультации и обсуждения ваших рекламных потребностей. Мы всегда рады помочь вам!" />
        <meta property="og:image" content={og_img} />
        <MainComponent/>
        <Location/>
        <LocationCard/>
        <LowerCard/>
    </div>
  )
}

export default Contacts