import React from 'react';

const TimerInput = ({ value, onChange }) => {
  return (
    <div>
      <label className='label-text'>Minutes: </label>
      <br />
      <input
        className='text-box'
        type='number'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TimerInput;
