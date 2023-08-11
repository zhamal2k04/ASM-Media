import React from "react";
import "./LowerCard.css";

const LowerCard = () => {
  return (
    <div className="lowerCard-container">
      <section className="lowerCard-bgImg"></section>

      <section className="lowerCard-content">
        <h1>Есть вопросы или предложения?</h1>
        <p>
          Если вы хотите работать с нами или хотите узнать больше о том, что мы
          делаем, мы будем рады пообщаться с вами
        </p>
        <input type="submit" value="Свзятяься" id="submit"/>
      </section>
    </div>
  );
};

export default LowerCard;
