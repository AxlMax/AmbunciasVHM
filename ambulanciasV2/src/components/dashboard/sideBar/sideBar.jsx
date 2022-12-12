import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { 
    faTruckMedical,
    faCar, 
    faBars, 
    faRightFromBracket, 
    faHospital, 
    faLocationDot } from "@fortawesome/free-solid-svg-icons";

import SideBarIcon from "./sideBarIcon";
import BotonIcon from "./botonIcon";

import { Change } from "../../../storage/features/showSidebar/showSidebarSlice";

function SideBar() {

    const dispatch = useDispatch()

    const [show, sShow] = useState(false)
    const [bar, sBar] = useState("sidebar open")
    const [boton, sBoton] = useState("botonInfoContainer")
    const [botonStyle, sBotonStyle] = useState("botonInfo")

    const navigateTo = useNavigate()

    const buttonHandler = () => {
        sShow(!show)
        dispatch(Change(show))

        if(show){
            sBar("sidebar open")
            sBoton("botonInfoContainer")
            sBotonStyle("botonInfo")
            
        }else{
            sBar("sidebar") 
           sBoton("botonInfoContainer2")
           sBotonStyle("botonInfo2")
            
        }
    }




    const buttonHandlerExit = () => {
        navigateTo("/login")
        localStorage.setItem('Oauth', "")
    }
    
    return (
    <div className = {bar}>

        <div className = "img">
            <img src="/logovhm.png" class="img-fluid2"/>
            <hr/>
            <SideBarIcon 
                label = {"ambulancias"} 
                icon = {faTruckMedical}
                botonStyle = {"boton1"}
                handler = {() => {}}
            />
            <SideBarIcon 
                label = {"Hopitales"} 
                icon = {faHospital}
                botonStyle = {"boton2"}
                handler = {() => {}}
            />
            <SideBarIcon 
                label = {"Gps"} 
                icon = {faLocationDot}
                botonStyle = {"boton3"}
                handler = {() => {}}
            />  
            <SideBarIcon 
                label = {"Conductores"} 
                icon = {faCar}
                botonStyle = {"boton4"}
                handler = {() => {}}
            />

            <BotonIcon
                Container     = {"botonExitContainer"} 
                botonStyle    = {"botonExit"}
                icon          = {faRightFromBracket}
                buttonHandler = {buttonHandlerExit}
            />

            <BotonIcon 
                Container     = {boton} 
                botonStyle    = {botonStyle}
                icon          = {faBars}
                buttonHandler = {buttonHandler}
            />

        </div>
    </div>

    );
}

export default SideBar;