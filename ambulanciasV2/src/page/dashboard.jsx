import "../css/dashboard.css"
import Header from "../components/Header";
import InfoElements from "../components/InfoElements";
import Custom from "../components/Custom";
import SliderBar from "../components/SliderBar";
import Map from "../components/map";

function Dashboard() {

    return (
    <div className = "Dashboard">
       <SliderBar/>
       <div className="contBody">
            <Header name="DashBoard"/>
            <div className="contElements">
                <div className="contMap">
                    <Map/>
                </div>
                <Custom/>
            </div>
       </div>
    </div>
    );
}
/**
       <Info/>
       <SideBar/>

        <div className="space">
            <Map/>
        </div> */
export default Dashboard;