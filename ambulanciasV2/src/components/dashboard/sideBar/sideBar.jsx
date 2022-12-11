import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {faTruckMedical} from "@fortawesome/free-solid-svg-icons";
import { faHospital } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";

import SideBarIcon from "./sideBarIcon";

function SideBar() {

    const [bar, sBar] = useState("");

    const {value} = useSelector((state) => state.sidebarShow)


    useEffect(()=> {
        if(value){
            sBar("sidebar open")
        }else{
           sBar("sidebar") 
        }
    },[value])

    
    return (
    <div className = {bar}>

        <div className = "img">
            <img src="/logovhm.png" class="img-fluid2"/>
            <hr/>
            <SideBarIcon label = {"ambulancias"} icon = {faTruckMedical}/>
            <SideBarIcon label = {"Hopitales"} icon = {faHospital}/>
            <SideBarIcon label = {"Gps"} icon = {faLocationDot}/>
            <SideBarIcon label = {"Conductores"} icon = {faCar}/>
        </div>
    </div>

    );
}

export default SideBar;