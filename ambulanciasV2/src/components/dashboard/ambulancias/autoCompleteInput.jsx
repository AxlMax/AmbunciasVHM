import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import ItemInput from './itemInput';
import BotonIcon from "../../global/botonIcon";

function AutoCompleteInput(props) {

    const {list, sListF} = props
    const [List, sList] = useState([])
    const [value, sValue] = useState("")

    const [show, sShow] = useState(false)


    const handleInput = (event) => {
        const msg = event.target.value

        sValue(msg)
        let volatileList = []

        list.map((v,i) => {
            if(v.toLowerCase().startsWith(msg.toLowerCase())){
                volatileList.push(v)
            }
        })

        sList(volatileList)

    }

    if(list.length == List.length || show == true){
        sList([])
        sShow(false)
    }

    return (<>
            
                <input class = "search" placeholder='@search' onChange={handleInput} value={value}></input>

                <BotonIcon
                    Container     = {"searchButtonContainer"} 
                    botonStyle    = {"searchButton"}
                    icon          = {faMagnifyingGlass}
                    center        = {false}
                    buttonHandler   = {() => sListF([value])}

                />

                {List.map((v,i) => <ItemInput contenido = {v} sValue = {sValue} sShow = {sShow}/>)}

    
    </>);
}

export default AutoCompleteInput;