import React from 'react'
import "./Contacts.css"
import MainComponent from '../components/MainComponent/MainComponent'
import Location from '../components/Location/Location'
import LocationCard from "../components/Leaflet/LocationCard"
const Contacts = () => {
  return (
    <div className='contacts-container'>
        <MainComponent/>
        <Location/>
        <LocationCard/>
    </div>
  )
}

export default Contacts