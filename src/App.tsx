import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [inputValue, setInputValue] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTime((tm) => {
        if (tm > 0) {
          return tm - 0.01;
        } else {
          return 0;
        }
      });
    }, 10);

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

  function reset() {
    setTime(inputValue);
    setRunning(false);
  }

  return (
    <div className="timerBox">
      <h2>Zeit festlegen</h2>
      <Input
        value={inputValue}
        type="number"
        onchange={(e) => setInputValue(Number(e.target.value))}
        className="timerInput"
      />
      <div className="timeBox">
        <p>Time left</p>
        <span>{time.toFixed(3)}</span>
      </div>
      <div className="allBtn">
        <Button
          onclick={handleStartTimer}
          title="start"
          className="btn start"
        />
        <Button
          onclick={timePause}
          title="Pause"
          className="btn pause"
        />
        <Button
          onclick={reset}
          title="Reset"
          className="btn rest"
        />
      </div>
    </div>
  );
}

export default App;
