import React from "react";
import "./MainCard.css";
import { useTranslation } from "react-i18next";

const MainCard = () => {
  const {t} = useTranslation()
  return (
    <div className="mainCard-container">
      <div className="mainCard-sectionHandler">
        <section className="mainCard-Title">
            <h1>Asm</h1>
            <h2>Media</h2>
            <h3>{t('homeDescription')}</h3>
        </section>
      </div>
      <div className="mainCard-ads">
        <p>{t('placementAd')}</p>
      </div>
    </div>
  );
};

export default MainCard;
