import { BsFillGeoFill, BsFillMoonStarsFill, BsFillTelephoneForwardFill } from "react-icons/bs";
function Custom() {
    return ( 
        <div className="contCustom">
            <div className="contBtn">

                <BsFillTelephoneForwardFill className="icon"/>
            </div>
            <div className="contBtn">

                <BsFillMoonStarsFill className="icon"/>
            </div>
            <div className="contBtn">

                <BsFillGeoFill className="icon"/>
            </div>
        </div>
     );
}

export default Custom;