import React, { useState, useRef, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const logMousePosition = (event) => {
      console.log(`Mouse Position - X: ${event.clientX}, Y: ${event.clientY}`);
    };

    window.addEventListener('mousemove', logMousePosition);

    return () => {
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const pauseResumeTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    } else {
      startTimer();
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="timer">
      <h1>Timer</h1>
      <p>Time: {time} seconds</p>
      <button onClick={startTimer} disabled={isRunning}>Start</button>
      <button onClick={pauseResumeTimer}>{isRunning ? 'Pause' : 'Resume'}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;