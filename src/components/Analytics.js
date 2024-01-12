import Controllables from './Controllables';
import Speed from './Speed';
import Temperature from './Temperature';
const Analytics = ()=>{
    return(
        <div className="flex h-[18rem] w-full justify-between mt-5">
            <Speed/>
            <Controllables/>
            <Temperature/>
        </div>
    );
}
export default Analytics