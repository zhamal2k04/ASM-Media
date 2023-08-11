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
    <div className='channels-container'>
        <div className="serviceChannels">
        <div className="rowImgs">
          <img src={kinoteatr} alt="/" />
          <img src={toshkent} alt="/" />
          <img src={sport} alt="/" />
        </div>
        <div className="rowImgs">
          <img src={mahalla} alt="/" />
          <img src={ozbekiston24} alt="/" />
          <img src={yoshlar} alt="/" />
        </div>
        <div className="rowImgs">
          <img src={navo} alt="/" />
          <img src={oilaviy} alt="/" />
          <img src={ozbekiston} alt="/" />
        </div>
      </div>
    </div>
  )
}

export default Channels