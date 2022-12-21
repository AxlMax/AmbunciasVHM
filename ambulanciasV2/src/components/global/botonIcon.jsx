import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BotonIcon(props) {

    const {Container, botonStyle, icon, buttonHandler, center, tooltip} = props

    const centerRef = center == null ? "d-flex justify-content-center" : ""

    let tooltipR = tooltip == null ? "" : tooltip


    return (<>
        <div class = "botonIconContainer">
            <div className={Container}>
                <div class = {centerRef}>
                    <button class = {botonStyle} onClick = {() => buttonHandler()}>
                        <div class="fa-1.5x">
                            <FontAwesomeIcon icon={icon} className="mb-2"/>
                        </div>
                        
                    </button>
                    
                </div>
                <div class = {centerRef}>
                    {
                        tooltip == null 
                            ?   <></>
                            :   <span  class="tooltiptext">{tooltipR}</span>
                    }
                </div>
                
            </div>
        </div>
           
    </>);
}

export default BotonIcon;