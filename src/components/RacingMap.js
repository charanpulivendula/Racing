import React, { useState, useEffect } from 'react';
import sampleCoordinates from '../Assets/Austin.json';
import racingcar from '../Assets/racing_car.png';

const RacingMap2 = () => {
  const [carPosition, setCarPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const maxX = 1750; // Maximum x-value
    const maxY = 1200; // Maximum y-value (800 - (-400))

    const scaleX = 583.33 / maxX; // Adjust the scale based on your desired width
    const scaleY = 400 / maxY; // Adjust the scale based on your desired height

    // Car animation
    let i = 0;
    const interval = setInterval(() => {
      const rawX = sampleCoordinates[i][0];
      const rawY = sampleCoordinates[i][1];
      const scaledX = rawX * scaleX;
      const scaledY = -(rawY) * scaleY;

      setCarPosition({ x: scaledX, y: scaledY });

      i++;
      if (i === sampleCoordinates.length) {
        clearInterval(interval);
      }
    }, 10); // Update every 0.01 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='racing flex-col h-1/2'>
      <h2>Path Animation</h2>
      <div
        className='racing-map'
        style={{
          width: '583.33px',
          marginTop: '80px',
          marginLeft: '40px', // Adjust to your desired width // Adjust to your desired height
          position: 'relative', // Ensure that the absolute positioning works relative to this container
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: `${carPosition.y}px`,
            left: `${carPosition.x}px`,
            transition: 'all 0.5s ease', // Smooth transition
          }}
        >
          <img src={racingcar} alt='car' height={20} width={60} />
        </div>
      </div>
    </div>
  );
};

export default RacingMap2;
