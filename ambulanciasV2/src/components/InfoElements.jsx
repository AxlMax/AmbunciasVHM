
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Element from "./Element";
function InfoElements() {
    return ( 
        <div className="contInfo">
            <BsChevronLeft className="icon"/>
            <div className="contBody">
                <Element data="Ambulancia #1" state={true}/>
                <Element data="Ambulancia #2" state={false}/>
                <Element data="Ambulancia #3" state={true}/>
            </div>
            <BsChevronRight className="icon"/>
        </div>
     );
}

export default InfoElements;