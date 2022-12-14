
import { useEffect, useState} from 'react'
import { useSelector} from "react-redux";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import BotonIcon from "../sideBar/botonIcon";
import Card from "./card";
import Map from '../map';

import "./Ambulancias.css"

function Ambulancias() {

    const ambulancias = ["AB345", "43RAS", "345DA", "432ECD", "233AS", 
                        "223AS", "AB345"]

    const {value} = useSelector((state) => state.sidebarShow)

    const [num, sNum] = useState(4)
    const [index, sIndex] = useState(0)
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

    function range(start, end) {
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }

    const numAmbulacias = ambulancias.length

    const valuesPagination = range(0, Math.ceil(numAmbulacias/num) - 1)

    return (<>
        
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
                {ambulancias.map((v,i) => {

                    if(i >= index*num  && i < (index + 1)*num){
                        return <Card placa = {v}/>
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


       
    </>);
}

export default Ambulancias;