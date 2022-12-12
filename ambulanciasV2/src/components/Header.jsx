import { AiOutlineCaretLeft } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs";
function Header({name}) {
    return ( 
        <div className="contHeader">
            <div className="contTitleIcon">
                <AiOutlineCaretLeft className="icon"/>
                <p>{name}</p>
            </div>
            <div className="contPerfil">
                <p>Jan 7, 2022</p>
                <div className="Perfil">
                    <img/>
                    <BsChevronDown/>
                </div>
            </div>
        </div>
     );
}

export default Header;