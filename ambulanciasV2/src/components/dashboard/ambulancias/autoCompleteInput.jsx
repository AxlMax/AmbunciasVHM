import { useState, useRef, useEffect } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import ItemInput from './itemInput';
import BotonIcon from "../../global/botonIcon";

import {Dambulancia} from '../../../services/ambulancias';

function AutoCompleteInput(props) {

    const {list, sListF} = props
    const [List, sList] = useState([])
    const [value, sValue] = useState("")

    const [show, sShow] = useState(false)

    const ref = useRef(null)

    const handleInput = (event) => {
        const msg = event.target.value

        sValue(msg)
        let volatileList = []

        list.map((v,i) => {
            if(v.toLowerCase().startsWith(msg.toLowerCase())){
                volatileList.push(v)
            }
        })

        if(msg == ""){
            sList([])
            ref.current.style.display = "none"
        }else{
            sList(volatileList)
        }

        if(volatileList.length != 0 && msg != ""){
            ref.current.style.display = "block"
        }
    }

    if(show == true){
        sList([])
        sShow(false)
    }

    useEffect(()=> {
        ref.current.style.display = "none"
    },[])

    return (<>
            
            <input class = "search" placeholder='@search' onChange={handleInput} value={value}></input>

            <BotonIcon
            Container     = {"searchButtonContainer"} 
            botonStyle    = {"searchButton"}
            icon          = {faMagnifyingGlass}
            center        = {false}
            buttonHandler   = {() => {

                const flag = list.find(element => element == value)

                if(flag != undefined){
                    sListF([{"placa" : value}])    
                }else{
                    sListF([])  
                }

                sValue("")
            }}

            />

            <div class = "scrollN" ref = {ref}>
                {List.map((v,i) => <ItemInput 
                                        contenido = {v} 
                                        sValue = {sValue} 
                                        sShow = {sShow}
                                    />)}
            </div>
    </>);
}

export default AutoCompleteInput;