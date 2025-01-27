import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(
    JSON.parse(localStorage.getItem("seconds")) || 0
  );
  const [isOnTimer, setIsOnTimer] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isOnTimer && seconds > 0) {
      timerRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          const updatedSeconds = prevSeconds - 1;
          localStorage.setItem("seconds", JSON.stringify(updatedSeconds));
          if (updatedSeconds <= 0) {
            clearInterval(timerRef.current);
            setIsOnTimer(false);
          }
          return updatedSeconds;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [isOnTimer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputSeconds = Number(e.target.seconds.value);
    if (inputSeconds > 0) {
      e.target.reset();
      setSeconds(inputSeconds);
      setIsOnTimer(true);
    }
  };

  const handleStop = () => {
    setIsOnTimer(false);
    clearInterval(timerRef.current);
  };

  return (
    <div>
      <h1>Timer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="seconds"
          placeholder="Enter timer start value"
          min="1"
          required
        />
        <button type="submit">Set Timer</button>
      </form>
      <div id="timer-section">
        <h2>{seconds > 0 ? seconds : "Time's up!"}</h2>
        <div id="btn-div">
          <button
            id="start-btn"
            className="timer-btn"
            onClick={() => setIsOnTimer(true)}
            disabled={isOnTimer || seconds === 0}
          >
            Start Timer
          </button>
          <button
            id="stop-btn"
            className="timer-btn"
            onClick={handleStop}
            disabled={!isOnTimer}
          >
            Stop Timer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
