import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import SideBar from "./sideBar/sideBar";
import Map from "./map";
import Info from "./info/info";

import "./dashboard.css"
import Ambulancias from "./ambulancias/ambulancias";

function Dashboard() {

    const navigateTo = useNavigate()

    const [space, sSpace] = useState("")
    const {value} = useSelector((state) => state.login)
    const  show = useSelector((state) => state.sidebarShow.value)

    useEffect(()=> {
        if(value == "" || value == null){
            navigateTo("/login") 
        }

        if(show){
            sSpace("space")
        }else{
           sSpace("BigSpace") 
        }
    },[value, show])

    return (
    <div className = "dashboardContainer">
       <Info/>
       <SideBar/>
       <div className = {space}>
            <Ambulancias/>            
       </div>
        
    </div>
    );
}

export default Dashboard;