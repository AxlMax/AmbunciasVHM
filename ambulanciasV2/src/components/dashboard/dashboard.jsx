import "./dashboard.css"

import '../../../../modulos/bootstrap/dist/css/bootstrap.min.css';

import SideBar from "./sideBar";
import Map from "./map";

function Dashboard() {
    return (
    <div className = "Dashboard">
       <SideBar/>
        <div className="info">

        </div>

        <div className="space">
            <Map/>
        </div>

     
    </div>
    );
}

export default Dashboard;