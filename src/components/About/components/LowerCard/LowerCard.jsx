import React from "react";
import "./LowerCard.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LowerCard = () => {
  const {t} = useTranslation()
  return (
    <div className="lowerCard-container">
      <section className="lowerCard-bgImg"></section>

      <section className="lowerCard-content">
        <h1>
          {t('aboutLowerTitle')}
        </h1>
        <p>
          {t('aboutDescription')}
        </p>
        <Link to={"https://t.me/asm_media"} target="_blank">
          <input type="submit" value={t('aboutBtnClick')} id="submit" />
        </Link>
      </section>
    </div>
  );
};

export default LowerCard;
