import { useState, useEffect, useRef, useCallback } from "react";

const Timer = () => {
  const timerRef = useRef(null);
  const timeRef = useRef(parseInt(localStorage.getItem("countdownTime"), 10) || 1800);
  const [timeLeft, setTimeLeft] = useState(timeRef.current);

  const updateLocalStorage = useCallback(() => {
    localStorage.setItem("countdownTime", timeRef.current);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;

    timerRef.current = setInterval(() => {
      timeRef.current -= 1;
      setTimeLeft(timeRef.current);
      
      if (timeRef.current % 5 === 0) {
        updateLocalStorage(); // Salva a cada 5 segundos para evitar sobrecarga
      }

      if (timeRef.current <= 0) {
        clearInterval(timerRef.current);
        localStorage.removeItem("countdownTime");
      }
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [updateLocalStorage]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("countdownTime", timeRef.current);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="text-center font-bold text-2xl">
      <div>ESSA OFERTA ACABA EM:</div>
      <div>{formatTime(timeLeft)}</div>
    </div>
  );
};

export default Timer;
