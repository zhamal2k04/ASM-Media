import React from 'react'
import "./Location.css"
import geoLoc from "../../../../Assets/Images/geoLoc.png"
import cellPic from "../../../../Assets/Images/cellPic.png"
import { useTranslation } from 'react-i18next';

const Location = () => {
  const {t} = useTranslation()
  return (
    <div className='location-container'>
       <div className="locationDivsHandler">
                <div className="leftLocation-Div">
                    <img src={geoLoc} alt="location_pic" />
                    <h1>{t('quickLocation')}</h1>
                    <p>{t('quickLocation')}<br/>{t('locationStreet')}</p>
                </div>
                <div className="rightLocation-Div">
                    <img src={cellPic} alt="phone_pic" />
                    <h1>{t('callUs')}</h1>
                    <p>+998-33-070-00-70</p>
                    <p>+998-33-701-00-70</p>
                </div>
       </div>
    </div>
  )
}

export default Location