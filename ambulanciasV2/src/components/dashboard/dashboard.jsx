import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import SideBar from "./sideBar/sideBar";
import Map from "./map";
import Info from "./info/info";

import Ambulancias from "./ambulancias/ambulancias";
import Gps from "./gps/gps";
import Conductores from "./conductores/conductores";

import "./dashboard.css"




function Dashboard() {

    const navigateTo = useNavigate()

    const [space, sSpace] = useState("")
    const {value} = useSelector((state) => state.login)
    const  show = useSelector((state) => state.sidebarShow.value)
    const  spaceView = useSelector((state) => state.space.value)

    console.log(spaceView)

    const handlerSpace = () => {
        if(spaceView <= 1){
            return <Ambulancias/>
        }
        if(spaceView == 2){
            return <Gps/>
        }
        if(spaceView == 3){
            return <Conductores/>
        }
    }

    useEffect(()=> {

        const login = import.meta.env.VITE_LOGIN

        if(login != 'false'){
            if(value == "" || value == null){
                navigateTo("/login") 
            }
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
            {handlerSpace()}            
       </div>
        
    </div>
    );
}

export default Dashboard;