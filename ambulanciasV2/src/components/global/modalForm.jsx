import { useForm } from "react-hook-form";
import useOnclickOutside from "react-cool-onclickoutside";

import './Global.css'
/**
 * 
 * @param {*} props 
 * @param forwardedref la referencia que me permite cambiar el estilo del div
 * @param title titulo del modal
 * @param Body funcion fecha que devuelve el componente que sera renderizado
 * @param Footer funcion fecha que devuelve el componente que sera renderizado
 * @returns 
 */

function ModalForm(props) {

    const {forwardedRef, title, Body, Footer, onSubmit} = props

    const handleClose = () => forwardedRef.current.style.display = "none" 
    const ref = useOnclickOutside(handleClose);

    const { handleSubmit, register } = useForm();

    return (<>

    <div id="myModal" class="modal" ref={forwardedRef}>

    <div class="modal-contentN" ref = {ref}>
        <div class="modal-header">
            <h2>{title}</h2>

            <span class="close" onClick={handleClose}>&times;</span>
        
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div class="modal-body">
                {Body(register)}
            
            </div>
            <div class="modal-footerN">
                {Footer()}
            </div>
        </form>
    </div>

    </div>

    </>);
}

export default ModalForm;