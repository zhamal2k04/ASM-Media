import React from 'react'
import "./Contacts.css"
import MainComponent from '../components/MainComponent/MainComponent'
import Location from '../components/Location/Location'
const Contacts = () => {
  return (
    <div className='contacts-container'>
        <MainComponent/>
        <Location/>
    </div>
  )
}

export default Contacts