import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Change } from "../storage/features/showSidebar/showSidebarSlice";

function Info() {

    const dispatch = useDispatch()

    const [show, sShow] = useState(true)
    const [info, sInfo] = useState("info")

    const buttonHandler = () => {
        sShow(!show)
        dispatch(Change(show))

        if(show){
            sInfo("info")
        }else{
            sInfo("Biginfo")
        }
    }

    return (<>
        <div className = {info}>
            <button onClick = {() => buttonHandler()}>
                mostrar
            </button>
        </div>
    
    </>);
}

export default Info