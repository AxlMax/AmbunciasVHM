
//librerias
import { useEffect, useState, useRef} from 'react'
import { useSelector} from "react-redux";
import jwtDecode from 'jwt-decode';
import { faArrowRight, faArrowLeft, faArrowsRotate, faPlus, faCheck, faSliders } from "@fortawesome/free-solid-svg-icons";

//componentes
import BotonIcon from "../../global/botonIcon";
import Card from "./card";
import Map from '../map';
import AutoCompleteInput from './autoCompleteInput';
import ModalForm from '../../global/modalForm';
import InputForm from '../../global/inputForm';

//funciones generales
import range from '../../../../public/functions/generalFunctions';

//servicios
import RambulanciasByuser from '../../../services/user';

// estilos css
import "./Ambulancias.css"

function Ambulancias() {

    //************************************************** */
    // traer los valores de la base de datos

    const [ambulancias, sAmbulancias] = useState([""])
    const [ubicaciones, sUbicaciones] = useState([""])
    const [refreshList, sRefreshList] = useState(false)
    
    const [list, sList] = useState([])

    const user = useSelector((state) => state.login)

    const asyncEffect = async() => {
        const decodeUser = jwtDecode(user.value).doc
        const data = await (await RambulanciasByuser(decodeUser['_id'], user.value)).data
        sList(data)
        
        const ambulanciasAux = []
        const ubicacionesAux = []

        data.map((v,i) => {
            ambulanciasAux.push(v.placa)
            ubicacionesAux.push(v.ubicacion)
        })
        
        sAmbulancias(ambulanciasAux)
        sUbicaciones(ubicacionesAux)
    } 
    
    useEffect(() => {

        asyncEffect()

    },[refreshList])
    
    //******************************************************//
    // modal de creacion de ambulancias

    const childRef = useRef(null)

    const onSubmitForm = async(data) => {
        console.log(data)
    }


    const Body = (register) =>  <>
    
            <InputForm
                title = {"placa"}
                register = {register}
                registerName = {"placa"}
            />
            
            <InputForm
                title = {"ubicación"}
                register = {register}
                registerName = {"ubicacion"}
            />
            
    </>

    const Footer = () => <>
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
                    buttonHandler = {() => sRefreshList(!refreshList)}
                />

                <BotonIcon
                    Container     = {"plusButtonContainer"} 
                    botonStyle    = {"plusButton"}
                    icon          = {faPlus}
                    center        = {false}
                    buttonHandler = {() => childRef.current.style.display = "flex"}
                />

            </div>

        </div>
        
        
        <div class="containerCardD">
            <BotonIcon
                Container     = {"finalButton"} 
                botonStyle    = {"botonNext"}
                icon          = {faArrowLeft}
                buttonHandler = {() => {
                    if(index != 0){
                        sIndex(index - 1)
                    }
                }}
            />
                {list.map((v,i) => {


                    if(i >= index*num  && i < (index + 1)*num){
                        return <Card placa = {v.placa} ubicacion = {v.ubicacion}/>
                    }

                    
                })}
  
            <BotonIcon
                Container     = {"finalButton"} 
                botonStyle    = {"botonNext"}
                icon          = {faArrowRight}
                buttonHandler = {() => {
                    if(index < numAmbulacias/num - 1){
                        sIndex(index + 1)
                    } 
                }}
            />
        </div>

        <div className="paginationD">
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


        <div class = {map}>
            <Map/>
        </div>

        <ModalForm
            forwardedRef={childRef} 
            title = {"Crear Ambulancia"}
            Body = {Body}
            Footer = {Footer}
            onSubmit = {onSubmitForm}
        />


       
    </>);
}

export default Ambulancias;