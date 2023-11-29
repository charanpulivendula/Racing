import React, { useState, useEffect } from 'react';
import './ProgressBar.css'
const ProgressBar = () => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomProgressValue = Math.floor(Math.random() * 101);
      setProgressValue(randomProgressValue);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='progress flex justify-between'>
      <div className="progress-bar-container flex">
        <div className="progress-bar-fill" style={{ width: `${progressValue}%` }}>
        </div>
      </div>
      <div className='progress-val flex text-lg'><h1>{progressValue}</h1></div>
    </div>
  );
};

export default ProgressBar;
