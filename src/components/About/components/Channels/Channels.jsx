import React from 'react'
import "./Channels.css"
import yoshlar from "../../../../Assets/Images/yoshlar.jpg";
import toshkent from "../../../../Assets/Images/toshkent.jpg";
import ozbekiston24 from "../../../../Assets/Images/o'zbekiston24.jpg";
import ozbekiston from "../../../../Assets/Images/o'zbekiston.jpg";
import navo from "../../../../Assets/Images/navo.jpg";
import sport from "../../../../Assets/Images/sport.jpg";
import oilaviy from "../../../../Assets/Images/oilaviy.jpg";
import mahalla from "../../../../Assets/Images/mahalla.jpg";
import dunyo_boylab from "../../../../Assets/Images/dunyo_bo'ylab.jpg";
import kinoteatr from "../../../../Assets/Images/kinoteatr.jpg";

const Channels = () => {
  return (
    <div className='channels-container' id='aboutPage-channels'>
        <div className="serviceChannels">
        <div className="rowImgs">
          <img src={kinoteatr} alt="kinoteatr_pic" />
          <img src={toshkent} alt="toshkent_pic" />
          <img src={sport} alt="sport_pic" />
        </div>
        <div className="rowImgs">
          <img src={mahalla} alt="mahalla_pic" />
          <img src={ozbekiston24} alt="ozbekistan24_pic" />
          <img src={yoshlar} alt="yoshlar_pic" />
        </div>
        <div className="rowImgs">
          <img src={navo} alt="navo_pic" />
          <img src={oilaviy} alt="oilaviy_pic" />
          <img src={ozbekiston} alt="ozbekiston_pic" />
        </div>
      </div>
    </div>
  )
}

export default Channels