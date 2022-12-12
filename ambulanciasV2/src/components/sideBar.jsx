import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function SideBar() {

    const [bar, sBar] = useState("SideBar");

    const {value} = useSelector((state) => state.sidebarShow)


    useEffect(()=> {
        if(value){
            sBar("SideBar")
        }else{
           sBar("SideBarHide") 
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
                Ambulancia
            </button>
        </div>   
    </div>

    );
}

export default SideBar;