import React from "react";
import "./LowerCard.css";

const LowerCard = () => {
  return (
    <div className="portfolioLowerCard-container">
      <div className="lowerBg-img"></div>
      <div className="portfolioLowerTitle">
        <h1>Есть вопросы или предложения?</h1>
        <p>
          Если вы хотите работать с нами или хотите узнать больше о том, что мы
          делаем, мы будем рады пообщаться с вами
        </p>
        <input type="submit" value={"Связаться"} id="submit"/>
      </div>
    </div>
  );
};

export default LowerCard;
