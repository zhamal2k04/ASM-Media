import React from 'react'
import "./MainComponent.css"
import { useTranslation } from 'react-i18next'

const MainComponent = () => {
  const {t} = useTranslation()
  return (
    <div className="mainComp-container">
      <div className="aboutPage-Title">
        <h1>
          {t('aboutTitle')}
        </h1>
        <h2>
          {t('homeCenterTitle')}
        </h2>
        <ul>
            <li>
              {t('homeCenterList1')}
            </li>
            <li>
              {t('homeCenterList2')}
            </li>
            <li>
              {t('homeCenterList3')}
            </li>
        </ul>
      </div>
    </div>
  )
}

export default MainComponent