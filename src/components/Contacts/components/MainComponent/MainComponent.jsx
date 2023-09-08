import React from 'react'
import "./MainComponent.css"
import { useTranslation } from 'react-i18next'

const MainComponent = () => {
  const {t} = useTranslation()
  return (
    <div className='mainComponent-container'>
        <h1>
          {t('contact')}
        </h1>

    </div>
  )
}

export default MainComponent