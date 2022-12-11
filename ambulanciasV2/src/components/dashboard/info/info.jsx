import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Change } from "../../../storage/features/showSidebar/showSidebarSlice";

import {faBars} from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import BotonIcon from "./botonIcon";
import { useNavigate } from 'react-router-dom';

function Info() {
    const dispatch = useDispatch()

    const navigateTo = useNavigate()

    const [show, sShow] = useState(false)
    const [info, sInfo] = useState("info")

    const buttonHandler = () => {
        sShow(!show)
        dispatch(Change(show))

        if(show){
            sInfo("info")
        }else{
            sInfo("Biginfo")
        }
    }

    const buttonHandlerExit = () => {
        navigateTo("/login")
        localStorage.setItem('Oauth', "")
    }

    return (<>

        
        <div className = {info}>
            <div className="infoContainer">
                <BotonIcon 
                    Container     = {"botonInfoContainer"} 
                    botonStyle    = {"botonInfo"}
                    icon          = {faBars}
                    buttonHandler = {buttonHandler}
                />

                <BotonIcon
                    Container     = {"botonExitContainer"} 
                    botonStyle    = {"botonExit"}
                    icon          = {faRightFromBracket}
                    buttonHandler = {buttonHandlerExit}
                />
            </div>
        </div>

    </>);
}

export default Info