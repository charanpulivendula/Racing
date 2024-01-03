import React, { useState, useEffect } from 'react';
// import sampleCoordinates from '../Assets/Austin.json'
import './RacingMap.css';

import io from 'socket.io-client'
import racing_map from '../Assets/Italy_raceline.png'

const RacingMap = () => {
  const [dots, setDots] = useState([]);
  const [carPosition, setCarPosition] = useState({ x: 0, y: 0 });
  const [coordinates, setCoordinates] = useState([]);
  useEffect(()=>{
    const fetchData = async ()=>{
      const socket = io('http://localhost:8080/api/coordinates'); // Replace with your server URL
    socket.on('udpData', (data) => {
      setCoordinates(data);
    });
    return () => {
      socket.disconnect();
    };
    }
    fetchData();
  },[])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/coordinates');
        const data = await response.json();
        setCoordinates(data);
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    fetchData();
  }, []);
  console.log(coordinates);

  useEffect(() => {
    const maxX = 1750; 
    const maxY = 1200; 

    const scaleX = 583.33 / maxX; // Adjust the scale based on your desired width
    const scaleY = 400 / maxY; // Adjust the scale based on your desired height

    const dotsArray = coordinates.map((coordinate) => {
      const rawX = coordinate[0];
      const rawY = coordinate[1];
      const scaledX = rawX * scaleX;
      const scaledY = -(rawY) * scaleY;// Adjust for the y-axis range

      return { x: scaledX, y: scaledY };
    });

    setDots(dotsArray);

    const animateDot = (dotIndex) => {
      setDots((prevDots) =>
        prevDots.map((dot, index) =>
          index === dotIndex ? { ...dot, animate: true } : { ...dot, animate: false }
        )
      );
    };

    let i = 0;
    const interval = setInterval(() => {
      if (i < dotsArray.length) {
        animateDot(i);
        setCarPosition(dotsArray[i]);
        i++;
      } else {
        i=0
      }
    }, 50); // Update every 0.5 seconds

    return () => clearInterval(interval);
  }, [coordinates]);

  return (
    <div className='racing flex-col h-[28rem] border-2 border-black'>
      <div className='racing-map  h-[24rem] '>
        <div className='magnifier h-full  w-2/3'>
            <img src={racing_map} alt='racing map' />
        </div>
        {/* <div className='relative'
          style={{
            top: `${carPosition.y}px`,
            left: `${carPosition.x}px`,
            backgroundColor: 'crimson', // Car color
            width: '20px', // Car width
            height: '20px', // Car height
            borderRadius: '50%', // Make it a circle
            transition: 'all 0.5s ease', // Smooth transition
          }}
        ></div> */}
      </div>

    </div>
  );
};

export default RacingMap;
