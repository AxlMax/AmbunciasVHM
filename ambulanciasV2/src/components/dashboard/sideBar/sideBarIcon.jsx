import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * 
 * @param {label, icon} props label es la etiqueta del boton y icon es el icono
 * @returns un boton que se renderiza en sideBar
 */

import { useDispatch } from "react-redux";

function SideBarIcon(props) {

    const dispatch = useDispatch()

    const {label, icon, botonStyle, handler, num} = props

    const handlerButton = (num) => {

    }


    return (<>
        <div className= "ContainerBoton">
            <button className = {botonStyle} onClick = {handlerButton(num)}>
            <FontAwesomeIcon icon={icon} className = "m-1"/>
                {label}
            </button>
        </div>   
    </>);
}

export default SideBarIcon;