import { useRef, useEffect } from "react";
import useOnclickOutside from "react-cool-onclickoutside";

import "./Global.css"

/**
 * 
 * @param {*} props 
 * @param forwardedref la referencia que me permite cambiar el estilo del div
 * @param title titulo del modal
 * @param Body funcion fecha que devuelve el componente que sera renderizado
 * @param Footer funcion fecha que devuelve el componente que sera renderizado
 * @returns 
 */

function MyModal(props) {

    const {forwardedRef, title, Body, Footer, type} = props

    const handleClose = () => forwardedRef.current.style.display = "none" 
    const ref = useOnclickOutside(handleClose);

    const refHeader = useRef(null)

    useEffect(()=> {

        if(type == "delete"){
            refHeader.current.style.backgroundColor = "rgb(236, 135, 122)"
        }
    },[])

    

    return (<>

    <div id="myModal" class="modal" ref={forwardedRef}>

        <div class="modal-contentN" ref = {ref}>
            <div class="modal-header" ref = {refHeader} backgroundColor="blue">
                <h2>{title}</h2>

                <span class="close" onClick={handleClose}>&times;</span>
            
            </div>
            <div class="modal-body">
                {Body()}
              
            </div>
            <div class="modal-footerN">
                {Footer()}
            </div>
        </div>

    </div>

    </>);
}

export default MyModal;