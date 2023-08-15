import React from 'react'
import "./MainComponent.css"

const MainComponent = () => {
  return (
    <div className="mainComp-container">
      <div className="aboutPage-Title">
        <h1>About Us</h1>
        <h2>
          Это команда профессионалов со значительным опытом в области рекламы.
        </h2>
        <ul>
            <li>Большой опыт работы как с локальными, так и с международными компаниями</li>
            <li>Комплексных подход и использование интегрированных коммуникаций</li>
            <li>Специальные условия на размещение рекламы со многими ключевыми медийными площадками</li>
        </ul>
      </div>
    </div>
  )
}

export default MainComponent