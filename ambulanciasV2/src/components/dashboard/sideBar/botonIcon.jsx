import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BotonIcon(props) {

    const {Container, botonStyle, icon, buttonHandler, center} = props

    const centerRef = center == null ? "d-flex justify-content-center" : ""

    return (<>
            <div className={Container}>
                <div class = {centerRef}>
                    <button className = {botonStyle} onClick = {() => buttonHandler()}>
                        <div className="fa-1x">
                            <FontAwesomeIcon icon={icon} className="mb-2"/>
                        </div>
                    </button>
                </div>
            </div>
    </>);
}

export default BotonIcon;