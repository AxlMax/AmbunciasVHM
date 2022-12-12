import { useState, useEffect } from "react";
import { useSelector} from "react-redux";

function Info() {
    
    const {value} = useSelector((state) => state.sidebarShow)

    const [info, sInfo] = useState("info")
   
    useEffect(()=> {
        if(value){
            sInfo("info")
        }else{
           sInfo("Biginfo") 

        }
        console.log(value)
    },[value])

    return (<>

        
        <div className = {info}>
           
        </div>

    </>);
}

export default Info