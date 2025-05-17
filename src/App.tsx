import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running || time == 0) return;

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [running, time]);

  function handleStartTimer() {
    if (inputValue >= 0) {
      setRunning(true);
      setTime(inputValue);
    }
  }
  function timePause() {
    setRunning(false);
  }

  return (
    <div className="timerBox">
      <h2>Zeit festlegen</h2>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
        className="timerInput"
        type="number"
      />
      <div className="timeBox">
        <p>Time left</p>
        <span>{time.toFixed(3)}</span>
      </div>
      <div className="allBtn">
        <button
          onClick={() => handleStartTimer()}
          className="btn start"
        >
          Start
        </button>
        <button
          className="btn pause"
          onClick={() => timePause()}
        >
          Pause
        </button>
        <button className="btn rest">Rest</button>
      </div>
    </div>
  );
}

export default App;
