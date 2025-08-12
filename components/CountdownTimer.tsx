
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  duration: number; // in seconds
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="my-6 p-4 bg-red-100 border border-red-300 rounded-lg text-center">
      <h4 className="font-bold text-red-700 text-lg">⚠️ Sua Oferta Expira em:</h4>
      <div className="text-4xl font-mono font-bold text-red-600 mt-2 animate-pulse">
        <span>{String(minutes).padStart(2, '0')}</span>
        :
        <span>{String(seconds).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;