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
import kinoteatr from "../../../../Assets/Images/kinoteatr.jpg";

const Channels = () => {
  return (
    <div className='channels-container' id='aboutPage-channels'>
        <div className="serviceChannels">
        <div className="rowImgs">
          <img src={kinoteatr} alt="канал кинотеатр" />
          <img src={toshkent} alt="размещение рекламы в тошкент канал" />
          <img src={sport} alt="реклама в канале спорт" />
        </div>
        <div className="rowImgs">
          <img src={mahalla} alt="продвигание рекламы в махалла" />
          <img src={ozbekiston24} alt="ozbekistan24_pic" />
          <img src={yoshlar} alt="размещение на ёшлар" />
        </div>
        <div className="rowImgs">
          <img src={navo} alt="размещение на наво" />
          <img src={oilaviy} alt="реклама в телеканале оилавий" />
          <img src={ozbekiston} alt="размещение на " />
        </div>
      </div>
    </div>
  )
}

export default Channels