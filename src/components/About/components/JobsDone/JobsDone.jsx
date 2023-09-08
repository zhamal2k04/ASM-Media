import React from 'react'
import "./JobsDone.css"
import { useTranslation } from 'react-i18next'

const JobsDone = () => {
  const {t} = useTranslation()
  return (
    <div className='jobsDone-container'>
        <div className="RowCard">
            <h1>
              {t('jobTitle')}
            </h1>
            <p>200 +</p>
        </div>
        <div className="RowCard">
            <h1>
              {t('jobclients')}
            </h1>
            <p>99 %</p>
        </div>
        <div className="RowCard">
            <h1>
              {t('jobWorkHour')}
            </h1>
            <p>146, 00</p>
        </div>
    </div>
  )
}

export default JobsDone