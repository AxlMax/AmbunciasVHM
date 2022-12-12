import { BsBroadcast } from "react-icons/bs";
function Element({data, state}) {
    return ( 
        <div className="Element">
            <BsBroadcast className={state?"contState true": "contState false"}>
            </BsBroadcast>
            <img src="../../public/ambulancia.gif"/>
        </div>
     );
}

export default Element;