import React from 'react'
import "./Location.css"
import geoLoc from "../../../../Assets/Images/geoLoc.png"
import cellPic from "../../../../Assets/Images/cellPic.png"

const Location = () => {
  return (
    <div className='location-container'>
       <div className="locationDivsHandler">
                <div className="leftLocation-Div">
                    <img src={geoLoc} alt="location_pic" />
                    <h1>Наши местоположения</h1>
                    <p>Узбекистан, Ташкент<br/>улица Богибустон 186</p>
                </div>
                <div className="rightLocation-Div">
                    <img src={cellPic} alt="phone_pic" />
                    <h1>Позвоните нам</h1>
                    <p>+998-33-070-00-70</p>
                    <p>+998-33-070-00-70</p>
                </div>
       </div>
    </div>
  )
}

export default Location