
//librerias
import { useEffect, useState, useRef} from 'react'
import { useSelector} from "react-redux";
import jwtDecode from 'jwt-decode';
import { faArrowRight, faArrowLeft, faArrowsRotate, faPlus, faCheck, faSliders } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';

//componentes
import BotonIcon from "../../global/botonIcon";
import Card from "./card";
import Map from '../map';
import AutoCompleteInput from '../../global/autoCompleteInput';
import ModalForm from '../../global/modalForm';
import InputForm from '../../global/inputForm';

//funciones generales
import range from '../../../../public/functions/generalFunctions';

//servicios
import RambulanciasByuser, {linkAmbulancia} from '../../../services/user';
import Cambulancia, {RgpsByambulancia} from '../../../services/ambulancias';

// estilos css
import "./Ambulancias.css"

function Ambulancias() {

    //************************************************** */
    // traer los valores de la base de datos

    const [ambulancias, sAmbulancias] = useState([""])
    const [ubicaciones, sUbicaciones] = useState([""])
    const [refreshList, sRefreshList] = useState(false)
    const [gpsArray, sGpsArray] = useState([])

    const [list, sList] = useState([])

    const token = useSelector((state) => state.login).value
    const decodeUser = jwtDecode(token).doc

    const asyncEffect = async() => {

        console.log("entre")
        console.log(refreshList)
        const data = await (await RambulanciasByuser(decodeUser['_id'], token)).data
        
        console.log(data)

        if(data[0] == null){
            sList([])
        }else{
            sList(data)

            const ambulanciasAux = []
            const ubicacionesAux = []
    
            data.map(async(v,i) => {
                ambulanciasAux.push(v.placa)
                ubicacionesAux.push(v.ubicacion)

                const gps = await (await RgpsByambulancia(v["_id"],token)).data
                sGpsArray(...gpsArray, gps)

            })
            
            sAmbulancias(ambulanciasAux)
            sUbicaciones(ubicacionesAux)
        }        
    } 
    
    useEffect(() => {

        asyncEffect()

    },[refreshList])
    
    //******************************************************//
    // modal de creacion de ambulancias

    const childRefC = useRef(null)
    const [modalStyle, sModalStyle] = useState("modal-contentN")
    
    const [placaInput, sPlacaInput] = useState("") // variable que me permite limpiar los estados de los input del formulario
    const [ubicacionInput, sUbicacionInput] = useState("")

    const onSubmitFormC = async(data) => {
 
        sModalStyle("modal-contentNClose")
        

        try{
            
            const ambulancia = await (await Cambulancia(data, token)).data
            
            await linkAmbulancia(
                decodeUser['_id'], 
                ambulancia['_id'],
                token
            )

            toast.success('🚑 Ambulancia creada', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });

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
            });
        }

        
        console.log(refreshList)
        sRefreshList(value => !value)
        console.log(refreshList)
  
        childRefC.current.style.display = "none"
        sModalStyle("modal-contentN")

    }


    const BodyC = (register) =>  <>
    
            <InputForm
                title = {"placa"}
                register = {register}
                registerName = {"placa"}
                valueInput = {{
                    "value"  : placaInput,
                    "setter" : sPlacaInput
                }}
            />
            
            <InputForm
                title = {"ubicación"}
                register = {register}
                registerName = {"ubicacion"}
                valueInput = {{
                    "value"  : ubicacionInput,
                    "setter" : sUbicacionInput
                }}
            />
            
    </>

    const FooterC = () => <>
                <BotonIcon
                    Container     = {"checkButtonContainer"} 
                    botonStyle    = {"checkButtonStyle"}
                    icon          = {faCheck}
                    center        = {false}
                    buttonHandler = {() => {}}
                    
                />
        </>

    //******************************************************//

    // variables y es use efect para las animaciones 

    const {value} = useSelector((state) => state.sidebarShow)
    
    // numero de card segun el estado open o normal
    const [num, sNum] = useState(4)
    // index del paginador
    

    const [map, sMap] = useState("map")

    useEffect(()=> {
        if(value){
            sNum(4)
            sMap("map")
        }else{
            sNum(6) 
            sMap("map open")

        }
        
    },[value])

    //******************************************************//

    // variables del paginador

    const [index, sIndex] = useState(0)
    const numAmbulacias = ambulancias.length
    const valuesPagination = range(0, Math.ceil(numAmbulacias/num) - 1)

    //******************************************************//

    return (<>
        <div class = "containerHeader">
            <div class = "containerSearch">
               
            <AutoCompleteInput list = {ambulancias} sListF = {sList}/>     

                <BotonIcon
                    Container     = {"refreshButtonContainer"} 
                    botonStyle    = {"refreshButton"}
                    icon          = {faArrowsRotate}
                    center        = {false}
                    tooltip       = {"refrescar ambulancia"}
                    buttonHandler = {() => sRefreshList(!refreshList)}
                />

                <BotonIcon
                    Container     = {"plusButtonContainer"} 
                    botonStyle    = {"plusButton"}
                    icon          = {faPlus}
                    center        = {false}
                    tooltip       = {"crear ambulancia"}
                    buttonHandler = {() => {

                        sUbicacionInput("")
                        sPlacaInput("")
                        childRefC.current.style.display = "flex"

                    }}
                />

            </div>

        </div>
        
        <div class="containerCardD">
            {
                list.length > 4 
                    ? <BotonIcon
                        Container     = {"finalButton"} 
                        botonStyle    = {"botonNext"}
                        icon          = {faArrowLeft}
                        buttonHandler = {() => {
                            if(index != 0){
                                sIndex(index - 1)
                            }
                    }}/>
                    : <></>
            }

            {
                list.length == 0 
                    ?   <div>
                            <img src="/no-data.png" class="img-fluid3"/>
                        </div>
                    : list.map((v,i) => {
                        if(i >= index*num  && i < (index + 1)*num){
                            return <Card 
                                        placa = {v.placa} 
                                        ubicacion = {v.ubicacion} 
                                        id = {v["_id"]}
                                        refresh = {
                                            {
                                                "value" : refreshList,
                                                "setter": sRefreshList
                                            }
                                        }
                                    />
                        }  
                    })
            }

            {
                list.length > 4 
                    ?   <BotonIcon
                            Container     = {"finalButton"} 
                            botonStyle    = {"botonNext"}
                            icon          = {faArrowRight}
                            buttonHandler = {() => {
                                if(index < numAmbulacias/num - 1){
                                    sIndex(index + 1)
                                } 
                            }}
                        />
                    : <></>
            }

        </div>


        {
            list.length > 4 
                ?   <div className="paginationD">
                        <div class = "d-flex justify-content-center">
            
                            {valuesPagination.map((v,i) => {
                                if(i == index){
                                    return <div class="buttonD active"></div>
                                }else{
                                    return <div class="buttonD" onClick={()=>{sIndex(i)}}></div>
                                }
                            })}
            
                        </div>
                    </div>
                : <></>
        }


        <div class = {map}>
            {
                list.length > 0 
                ?   <Map gps = {gpsArray}/>
                : <></>
            }
            
        </div>



        <ModalForm
            forwardedRef  ={childRefC} 
            title         = {"Crear Ambulancia"}
            Body          = {BodyC}
            Footer        = {FooterC}
            onSubmit      = {onSubmitFormC}
            modalStyle    = {modalStyle}
        />


        <ToastContainer/>
    </>);
}

export default Ambulancias;