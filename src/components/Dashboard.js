import RacingMap from "./RacingMap";
import Analytics from "./Analytics";
import './dashboard.css'

const Dashboard =()=>{
    return(
        <div className="container">
            <RacingMap/>
            <Analytics/>
        </div>
    )
}

export default Dashboard;
