import React, { useState, useEffect } from 'react';
import './App.css';
import TimerInput from './components/TimerInput';
import TimerControls from './components/TimerControls';

const App = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  let timer;

  useEffect(() => {
    if (isPlaying) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          clearInterval(timer);
          setIsPlaying(false);
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isPlaying, minutes, seconds]);

  const handleStart = () => {
    if (minutes === 0 && seconds === 0) alert('Enter number');
    else setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setMinutes(0);
    setSeconds(0);
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setMinutes(value);
      setSeconds(0);
      setIsPlaying(false);
    }
  };

  return (
    <div class='flex-container'>
      <div className='card'>
        <TimerInput
          value={minutes}
          onChange={(e) => handleInputChange(e, 'minutes')}
        />

        <TimerControls
          isPlaying={isPlaying}
          onStart={handleStart}
          onPause={handlePause}
          onReset={handleReset}
          minutes={minutes}
          seconds={seconds}
        />
      </div>
    </div>
  );
};

export default App;
