import Controllables from './Controllables';
import Speed from './Speed';
import Temperature from './Temperature';
const Analytics = ()=>{
    return(
        <div className="flex h-[18rem] w-full justify-between mt-5">
            <Temperature/>
            <Speed/>
            <Controllables/>
        </div>
    );
}
export default Analytics