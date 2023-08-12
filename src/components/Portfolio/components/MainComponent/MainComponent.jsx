import React from 'react'
import "./MainComponent.css"
import bg_video from "../../../../Assets/Videos/bg-video.mp4"

const MainComponent = () => {
  return (
    <div className='portfolioMainComponent-container'>
        <video autoPlay muted loop>
        <source src={bg_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default MainComponent