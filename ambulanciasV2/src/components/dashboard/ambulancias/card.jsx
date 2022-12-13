import BotonIcon from "../sideBar/botonIcon";
import { faTrash, faGear } from "@fortawesome/free-solid-svg-icons";

function Card(props) {

    const {placa} = props

    return (<>
            <div class="cardD">
                <h3 class = "placa"> {placa}</h3>
                <div class = "botonCardContainer">

                    <BotonIcon
                    Container     = {"trashBoton"} 
                    botonStyle    = {"trashBotonStyle"}
                    icon          = {faTrash}
                    buttonHandler = {() => {}}/>

                    <BotonIcon
                    Container     = {"gearBoton"} 
                    botonStyle    = {"gearBotonStyle"}
                    icon          = {faGear}
                    buttonHandler = {() => {}}/>

                </div>


            </div>
    </>);
}

export default Card;