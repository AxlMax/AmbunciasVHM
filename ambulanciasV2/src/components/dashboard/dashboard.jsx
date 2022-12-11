import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import SideBar from "./sideBar";
import Map from "./map";
import Info from "./info/info";

import "./dashboard.css"

function Dashboard() {
    
    const navigateTo = useNavigate()
    const {value} = useSelector((state) => state.login)

    useEffect(()=> {
        if(value == "" || value == null){
            navigateTo("/login") 
        }
    },[value])

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