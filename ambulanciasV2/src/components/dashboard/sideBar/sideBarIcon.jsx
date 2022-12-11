import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * 
 * @param {label, icon} props label es la etiqueta del boton y icon es el icono
 * @returns un boton que se renderiza en sideBar
 */

function SideBarIcon(props) {

    const {label, icon} = props

    return (<>
        <div className= "ContainerBoton">
            <button className = "boton">
            <FontAwesomeIcon icon={icon} className = "m-1"/>
                {label}
            </button>
        </div>   
    </>);
}

export default SideBarIcon;