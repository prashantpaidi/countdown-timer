import React from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { LuTimerReset } from 'react-icons/lu';
import TimerDisplay from './TimerDisplay';

const TimerControls = ({
  isPlaying,
  onStart,
  onPause,
  onReset,
  minutes,
  seconds,
}) => {
  return (
    <div className='countdown-timer-container'>
      {!isPlaying ? (
        <button className='icon-button' onClick={onStart}>
          <FaPlay />
        </button>
      ) : (
        <button className='icon-button' onClick={onPause}>
          <FaPause />
        </button>
      )}
      <button className='icon-button' onClick={onReset}>
        <LuTimerReset />
      </button>

      <TimerDisplay minutes={minutes} seconds={seconds} />
    </div>
  );
};

export default TimerControls;
