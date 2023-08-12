import React from 'react'
import "./Contacts.css"
import MainComponent from '../components/MainComponent/MainComponent'
import Location from '../components/Location/Location'
import LocationCard from "../components/Leaflet/LocationCard"
import ContactUs from '../components/ContactUs/ContactUs'
const Contacts = () => {
  return (
    <div className='contacts-container'>
        <MainComponent/>
        <Location/>
        <LocationCard/>
        <ContactUs/>
    </div>
  )
}

export default Contacts