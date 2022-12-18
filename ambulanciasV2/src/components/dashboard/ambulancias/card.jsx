import BotonIcon from "../../global/botonIcon";
import { faTrash, faGear } from "@fortawesome/free-solid-svg-icons";

function Card(props) {

    const {placa, ubicacion} = props

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
                    buttonHandler = {() => {}}
                    center = {false}/>

                    <BotonIcon
                    Container     = {"gearBoton"} 
                    botonStyle    = {"gearBotonStyle"}
                    icon          = {faGear}
                    buttonHandler = {() => {}}
                    center = {false}/>




            </div>
    </>);
}

export default Card;