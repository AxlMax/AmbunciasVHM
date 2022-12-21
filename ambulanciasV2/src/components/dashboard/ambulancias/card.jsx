import {useRef} from "react";
import { useSelector} from "react-redux"

import MyModal from "../../global/modal"
import BotonIcon from "../../global/botonIcon"
import { faTrash, faGear, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"

import {Dambulancia} from '../../../services/ambulancias'
import { ToastContainer, toast } from 'react-toastify';

/**
 * 
 * @param {*} props 
 * @param {string} placa     placa de la ambulancia
 * @param {string} ubicacion ubicacion de la ambulancia
 * @param {string} id        id de la ambulancia
 * @param {Object} refresh   me permite refrescar la lista de componentes
 * 
 * @returns una carta con los botones de eliminar editar y con informacion de la ambulancia
 */
function Card(props) {

    const {placa, ubicacion, id, refresh} = props

    const token = useSelector((state) => state.login).value
    
    // modal para la eliminacion //

    const childRef = useRef(null)
    

    const Body = () =>  <>
    </>

    const Footer = () => <>

                <BotonIcon
                    Container     = {"inputForm"} 
                    botonStyle    = {"crossButtonStyle"}
                    icon          = {faXmark}
                    buttonHandler = {() => childRef.current.style.display = "none"}
                    center = {false}
                />

                <BotonIcon
                    Container     = {"inputForm"} 
                    botonStyle    = {"checkButtonStyle"}
                    icon          = {faCheck}
                    center        = {false}
                    buttonHandler = {async() => {

                        try{
                            await Dambulancia(id, token)

                            toast.success('🚑 Ambulancia eliminada', {
                                position: "top-right",
                                autoClose: 1500,
                                hideProgressBar: false,
                                closeOnClick: false,
                                pauseOnHover: false,
                                draggable: false,
                                progress: undefined,
                                theme: "light",
                            })

                        }catch{
                            toast.error('❌ upsss un error', {
                                position: "top-right",
                                autoClose: 1500,
                                hideProgressBar: false,
                                closeOnClick: false,
                                pauseOnHover: false,
                                draggable: false,
                                progress: undefined,
                                theme: "light",
                            })
                        }

                        childRef.current.style.display = "none"
                        refresh.setter(!refresh.value)

                    }}
                    
                />
        </>



    return (<>
            <div class="cardD">

                <div class = "placa">
                    <div class = "bordePlaca">
                        <div class = "huecosPlacaL"/>
                        <div class = "huecosPlacaR"/>

                        <div class = "letrasPlaca">
                            <h6> {placa} </h6>
                        </div>
                            
                        <div class = "huecosPlacaL"/>
                        <div class = "huecosPlacaR"/>
                        <h6 class = "d-flex justify-content-center" > {ubicacion} </h6>
                        
                    </div>

                </div>
                    
                <BotonIcon
                Container     = {"trashBoton"} 
                botonStyle    = {"trashBotonStyle"}
                icon          = {faTrash}
                buttonHandler = {() => childRef.current.style.display = "flex"}
                center = {false}/>

                <BotonIcon
                Container     = {"gearBoton"} 
                botonStyle    = {"gearBotonStyle"}
                icon          = {faGear}
                buttonHandler = {() => {}}
                center = {false}/>

            </div>

            <MyModal 
                forwardedRef = {childRef} 
                title        = {"Eliminar ambulancia " + placa}
                Body         = {Body}
                Footer       = {Footer}
                type         = {"delete"}
            />

            <ToastContainer/>
    </>);
}

export default Card;