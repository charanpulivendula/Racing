import { useState } from "react";
import car_temp from '../Assets/car_temperature.png';
import './Temperature.css'
const Temperature = ()=>{
    const [temperature,setTemperature] = useState([36,36,36,36]);
    return (
        <div className="temp w-1/4 flex place-items-end ">
            <div className="temp-box flex-col w-1/4 mt-5">
                <div className="temp-val flex justify-end mb-32">
                    {temperature[0]}&deg;C
                </div>
                <div className="temp-val flex justify-end">
                    {temperature[1]}&deg;C
                </div>
            </div>
            <div className="image w-1/2 flex justify-center h-4/6">
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
    );
}

export default Temperature