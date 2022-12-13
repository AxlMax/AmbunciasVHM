import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeSpace } from "../../../storage/features/space/spaceSlice";

/**
 * 
 * @param {label, icon, botonStyle, num} props label es la etiqueta del boton y icon es el icono
 * @param botonStyle estilo del boton a renderizar
 * @param num indicador para renderizar algo en space
 * @returns un boton que se renderiza en sideBar
 */

import { useDispatch } from "react-redux";

function SideBarIcon(props) {

    const dispatch = useDispatch()

    const {label, icon, botonStyle, num} = props

    const handlerButton = () => {
        dispatch(ChangeSpace(num))
        console.log(num)
    }

    return (<>
        <div className= "ContainerBoton">
            <button className = {botonStyle} onClick = {handlerButton}>
            <FontAwesomeIcon icon={icon} className = "m-1"/>
                {label}
            </button>
        </div>   
    </>);
}

export default SideBarIcon;