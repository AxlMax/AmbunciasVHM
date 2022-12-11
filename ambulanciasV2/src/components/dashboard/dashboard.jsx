import "./dashboard.css"

import SideBar from "./sideBar";
import Map from "./map";
import Info from "./info";

function Dashboard() {

    return (
    <div className = "Dashboard">
       
       <Info/>
       <SideBar/>

        <div className="space">
            <Map/>
        </div>
    </div>
    );
}

export default Dashboard;