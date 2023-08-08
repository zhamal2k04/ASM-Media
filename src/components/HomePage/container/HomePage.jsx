import React from 'react'
import "./HomePage.css"
import MainCard from '../component/MainCard/MainCard'
import CenterComponent from '../component/CenterComponent/CenterComponent'
import ServiceComponent from '../component/ServiceComponent/ServiceComponent'

const HomePage = () => {
  return (
    <div className='homePage-container'>
        <MainCard/>
        <CenterComponent/>
        <ServiceComponent/>
    </div>
  )
}

export default HomePage