import React from "react";
import "./MainCard.css";

const MainCard = () => {
  return (
    <div className="mainCard-container">
      <div className="mainCard-sectionHandler">
        <section className="mainCard-Title">
            <h1>Asm</h1>
            <h2>Media</h2>
            <h3>«A-S-M Media» рекламное агенство более 10 лет на рынке Более+ 700 успешных кейсов</h3>
        </section>
      </div>
      <div className="mainCard-ads">
        <p>Размещение рекламы на телевидении Узбекистана</p>
      </div>
    </div>
  );
};

export default MainCard;
