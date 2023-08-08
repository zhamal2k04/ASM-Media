import React from "react";
import "./CenterComponent.css";

const CenterComponent = () => {
  return (
    <div className="centerComponent-container">
      <div className="centerTitle">
        <h1>
          Это команда профессионалов со значительным опытом в области рекламы.
        </h1>
      </div>
      <div className="centerSubTitle">
        <ul>
            <li>Большой опыт работы как с локальными, так и с международными компаниями</li>
            <li>Комплексных подход и использование интегрированных коммуникаций</li>
            <li>Специальные условия на размещение рекламы со многими ключевыми медийными площадками</li>
        </ul>
      </div>
    </div>
  );
};

export default CenterComponent;
