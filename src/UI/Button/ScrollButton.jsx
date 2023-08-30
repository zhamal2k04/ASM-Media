import React, { useState } from 'react';
import './ScrollButton.css';

const ScrollButton = () => {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsScrolledToTop(true);
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    setIsScrolledToTop(false);
  };

  const handleClick = () => {
    if (isScrolledToTop) {
      scrollToBottom();
    } else {
      scrollToTop();
    }
  };

  return (
    <div className="scroll-button-container">
      <button className="scroll-button" onClick={handleClick}>
        {isScrolledToTop ? '⬇️ Вниз' : '⬆️ Наверх'}
      </button>
    </div>
  );
}

export default ScrollButton;
