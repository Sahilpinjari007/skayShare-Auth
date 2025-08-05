import React, { useEffect, useState } from "react";

const CountDownTimer = ({ isTimerActive, setIsTimerActive }) => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    let interval;

    if (isTimerActive) {
      const expiryTime = parseInt(localStorage.getItem("otpSentTime"), 10);

      const updateRemainingTime = () => {
        const now = Date.now();
        const timeLeft = expiryTime - now;

        if (timeLeft <= 0) {
          clearInterval(interval);
          setRemainingTime(0);
          setIsTimerActive(false); // Timer ended
        } else {
          setRemainingTime(timeLeft);
        }
      };

      updateRemainingTime(); // initial call
      interval = setInterval(updateRemainingTime, 1000);
    }

    return () => clearInterval(interval);
  }, [isTimerActive, setIsTimerActive]);

  const formatTime = (ms) => {
    const totalSeconds = Math.ceil(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return isTimerActive ? <span>{formatTime(remainingTime)}</span> : null;
};

export default CountDownTimer;
