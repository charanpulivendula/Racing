import { useState,useEffect } from 'react';
import car_temp from '../Assets/car_temp.png';
import steering_img from '../Assets/steering2.png';
import './Temperature.css'
const Temperature = ()=>{
    const [temperature,setTemperature] = useState([36,36,36,36]);
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
        <div className="temp w-1/4 flex place-items-end ">
            <div className="steering h-1/4 flex">
                <div className="steering-image w-1/2 flex justify-start m-2">
                <img
                    src={steering_img}
                    width={80}
                    alt="steering"
                    // style={{ transform: `rotate(${steering}deg)`,
                    // transition: 'transform 0.5s ease' }}
                />
                </div>
                <div className='steering-val flex place-items-center text-2xl'>
                    {steering}
                </div>
            </div>
            <div>
            <div className="temp-box flex-col w-1/4 mt-5">
                <div className="temp-val flex justify-end mb-32">
                    {temperature[0]}&deg;C
                </div>
                <div className="temp-val flex justify-end">
                    {temperature[1]}&deg;C
                </div>
            </div>
            <div className="image w-1/2 flex justify-center">
                <img src={car_temp} height={200} width = {80} alt = "car"/>
            </div>
            <div className="temp-box flex-col w-1/4 mt-5">
                <div className="temp-val flex justify-start mb-32">
                    {temperature[2]}&deg;C
                </div>
                <div className="temp-val flex justify-start">
                    {temperature[3]}&deg;C
                </div>
            </div>
            </div>
        </div>
    );
}

export default Temperature