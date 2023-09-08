import React from "react";
import "./LowerCard.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LowerCard = () => {
  const {t} = useTranslation()
  return (
    <div className="portfolioLowerCard-container">
      <div className="lowerBg-img"></div>
      <div className="portfolioLowerTitle">
        <h1>{t('aboutLowerTitle')}</h1>
        <p>
          {t('aboutDescription')}
        </p>
        <Link to={"https://t.me/asm_media"} target="_blank">
          <input type="submit" value={t('aboutBtnClick')} id="submit" />
        </Link>
      </div>
    </div>
  );
};

export default LowerCard;
