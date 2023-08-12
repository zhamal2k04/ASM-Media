import React from 'react'
import "./PortfolioPage.css"
import MainComponent from '../components/MainComponent/MainComponent'
import PortfolioCards from '../components/PortfolioCards/PortfolioCards'
import LowerCard from '../components/LowerCard/LowerCard'

const PortfolioPage = () => {
  return (
    <div className='portfolioPage-container'>
        <MainComponent/>
        <PortfolioCards/>
        <LowerCard/>
    </div>
  )
}

export default PortfolioPage