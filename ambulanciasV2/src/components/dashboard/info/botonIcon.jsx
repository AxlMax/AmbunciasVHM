import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BotonIcon(props) {

    const {Container, botonStyle, icon, buttonHandler} = props

    return (<>
            <div className={Container}>
                <div class = "d-flex justify-content-center" >
                    <button className = {botonStyle} onClick = {() => buttonHandler()}>
                        <div className="fa-2x">
                            <FontAwesomeIcon icon={icon} className="mb-2"/>
                        </div>
                    </button>
                </div>
            </div>
    </>);
}

export default BotonIcon;