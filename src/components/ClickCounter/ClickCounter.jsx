import React, { useState, useEffect } from 'react';
import './ClickCounter.css';

const ClickCounter = () => {
  const [clickCount, ClickCount] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      ClickCount((prevCount) => prevCount + 1);
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="click-counter">
      <h1>Click Counter</h1>
      <p>Total Clicks: {clickCount}</p>
    </div>
  );
};

export default ClickCounter;