import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTruckMedical} from "@fortawesome/free-solid-svg-icons";

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
            <hr></hr>
        </div>

        <div className= "ContainerBoton">
            <button className = "boton">
            <FontAwesomeIcon icon={faTruckMedical} className = "m-1"/>
                Ambulancias
            </button>
        </div>   
    </div>

    );
}

export default SideBar;