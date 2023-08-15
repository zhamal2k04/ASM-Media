import React from "react";
import "./LowerCard.css";
import { Link } from "react-router-dom";

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
        <Link to={"https://t.me/asm_media"} target="_blank">
          <input type="submit" value="Свзятяься" id="submit" />
        </Link>
      </section>
    </div>
  );
};

export default LowerCard;
