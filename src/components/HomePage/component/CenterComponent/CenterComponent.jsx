import React from "react";
import "./CenterComponent.css";
import { useTranslation } from "react-i18next";

const CenterComponent = () => {
  const {t} = useTranslation()
  return (
    <div className="centerComponent-container">
      <div className="centerTitle">
        <h1>
          {t('homeCenterTitle')}
        </h1>
      </div>
      <div className="centerSubTitle">
        <ul>
            <li>{t('homeCenterList1')}</li>
            <li>{t('homeCenterList2')}</li>
            <li>{t('homeCenterList3')}</li>
        </ul>
      </div>
    </div>
  );
};

export default CenterComponent;
