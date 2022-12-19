import {useRef} from "react";

import MyModal from "../../global/modal";
import BotonIcon from "../../global/botonIcon";
import { faTrash, faGear, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function Card(props) {

    const {placa, ubicacion} = props

    // modal para la eliminacion //

    const childRef = useRef(null)
    

    const Body = () =>  <>
    </>

    const Footer = () => <>

                <BotonIcon
                    Container     = {"inputForm"} 
                    botonStyle    = {"crossButtonStyle"}
                    icon          = {faXmark}
                    buttonHandler = {() => childRef.current.style.display = "none"}
                    center = {false}
                />

                <BotonIcon
                    Container     = {"inputForm"} 
                    botonStyle    = {"checkButtonStyle"}
                    icon          = {faCheck}
                    center        = {false}
                    buttonHandler = {() => {}}
                    
                />
        </>



    return (<>
            <div class="cardD">

                <div class = "placa">
                    <div class = "bordePlaca">
                        <div class = "huecosPlacaL"/>
                        <div class = "huecosPlacaR"/>

                        <div class = "letrasPlaca">
                            <h6> {placa} </h6>
                        </div>
                            
                        <div class = "huecosPlacaL"/>
                        <div class = "huecosPlacaR"/>
                        <h6 class = "d-flex justify-content-center" > {ubicacion} </h6>
                        
                    </div>

                </div>
                    
                <BotonIcon
                Container     = {"trashBoton"} 
                botonStyle    = {"trashBotonStyle"}
                icon          = {faTrash}
                buttonHandler = {() => childRef.current.style.display = "flex"}
                center = {false}/>

                <BotonIcon
                Container     = {"gearBoton"} 
                botonStyle    = {"gearBotonStyle"}
                icon          = {faGear}
                buttonHandler = {() => {}}
                center = {false}/>

            </div>

            <MyModal 
                forwardedRef = {childRef} 
                title        = {"Eliminar ambulancia " + placa}
                Body         = {Body}
                Footer       = {Footer}
                type         = {"delete"}
            />
    </>);
}

export default Card;