
import { useRef} from "react";

import MyModal from "../global/modal";

import "./Testing.css"

function Testing() {

    const childRef = useRef(null);

    const handleOpen = () => {
        childRef.current.style.display = "flex"
    } 

    const Body = () =>  <>
            <p>Some text in the Modal Body</p>
            <p>Some other text...</p>
    </>

    const Footer = () => <>
        </>
    
  
    return (<>
    <h2>Bottom Modal</h2>

        <button id="myBtn" onClick={handleOpen}>Open Modal</button>

        <MyModal 
            forwardedRef={childRef} 
            title = {"Modal Header"}
            Body = {Body}
            Footer = {Footer}
        />
    </>
);
}
export default Testing;