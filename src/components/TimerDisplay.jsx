import React from 'react';

const TimerDisplay = ({ minutes, seconds }) => {
  return (
    <div className='countdown-timer-counter'>
      {String(Math.floor(minutes / 60)).padStart(2, '0')}:
      {String(minutes % 60).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </div>
  );
};

export default TimerDisplay;
