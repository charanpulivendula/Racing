import ReactSpeedometer from "react-d3-speedometer";
import { useEffect, useState } from "react";
import './speed.css'
const Speed = ()=>{
    const [currentSpeed,setCurrentSpeed] = useState(0);
    const [minSpeed,setMinSpeed] = useState(0);
    const [maxSpeed,setMaxSpeed] = useState(0);
    const handleSpeedChange = (speed)=>{
        setCurrentSpeed(speed)
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            const newSpeed = Math.floor(Math.random() * 240) + 1;
            setCurrentSpeed(newSpeed);
            setMinSpeed(Math.min(minSpeed, newSpeed));
            setMaxSpeed(Math.max(maxSpeed, newSpeed));
        }, 200);

        return () => clearInterval(intervalId);
    }, [minSpeed, maxSpeed]);
    return (
        <div className="speed flex-col w-1/2 m-0">
            <div className="reading flex justify-evenly h-1/4">
                <div className="speed-box flex-col">
                    <div className="box">
                    <h1 className="box-header">Minimum</h1>
                    <div className="box-value">{minSpeed}</div>
                    </div>
                </div>
                <div className="speed-box">
                    <div className="box">
                    <span className="box-header">Current</span>
                    <span className="box-value">{currentSpeed}</span>
                    </div>
                </div>
                <div className="speed-box">
                    <div className="box">
                    <span className="box-header">Maximum</span>
                    <span className="box-value">{maxSpeed}</span>
                    </div>
                </div>
            </div>

            <div className="semi-circle-wrapper flex justify-center mt-5 h-3/4">
                <div className="semi-circle"></div>
                    <ReactSpeedometer
                        maxValue={240}
                        value={currentSpeed}
                        needleColor="#DC143C"
                        startColor="lightgray"
                        ringWidth={30}
                        width={400}
                        maxSegmentLabels={12}
                        segments={120}
                        endColor="black"
                        textColor="black"
                        onChange={handleSpeedChange}
                    />
            </div>
        </div>
    );
}

export default Speed