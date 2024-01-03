import { useState,useEffect } from 'react';
import steering_img from '../Assets/steering2.png';
import ProgressBar from './ProgressBar';
const Controllables = ()=>{
    const [steering,setSteering] = useState(0);
    useEffect(() => {
        const getRandomAngle = () => Math.floor(Math.random() * 361) - 180;
    
        const interval = setInterval(() => {
          const randomAngle = getRandomAngle();
          setSteering(randomAngle);
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
    
    return (
        <div className="controllable w-1/4 flex-col">
            <div className="steering h-1/4 flex">
                <div className="steering-image w-1/2 flex justify-center">
                <img
                    src={steering_img}
                    alt="steering"
                    style={{ transform: `rotate(${steering}deg)`,
                    transition: 'transform 0.5s ease' }}
                />
                </div>
                <div className='steering-val flex place-items-center text-2xl'>
                    {steering}
                </div>
            </div>
            <div className="controls flex-col h-3/4 justify-evenly p-8 border-2 border-black m-3">
                <div className='h-1/3 throttle flex-col justify-start'>
                    <h1>
                        Throttle
                    </h1>
                    <ProgressBar/>
                </div>
                <div className='h-1/3 throttle flex-col justify-start'>
                    <h1>
                        Gear
                    </h1>
                    <ProgressBar/>
                </div>
                <div className='h-1/3 throttle flex-col justify-start'>
                    <h1>
                        Break
                    </h1>
                    <ProgressBar/>
                </div>
            </div>
        </div>
    );
}

export default Controllables