function ItemInput(props) {

    const {contenido, sValue, sShow} = props

    const handleClick = () => {
        sValue(contenido)
        sShow(true)
    }

    return (<>
            <li class = "items" >
                <div class = "d-flex justify-content-center" onClick={handleClick}>
                    {contenido} 
                </div>
                
            </li>
    </>);
}

export default ItemInput;