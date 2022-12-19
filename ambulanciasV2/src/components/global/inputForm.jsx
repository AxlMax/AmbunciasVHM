import "./Global.css"

/**
 * 
 * @param {*} props 
 * @param title es el titulo que tendra el input en el formulario
 * @param register es el metodo de use-form que me permite crear el json
 * @param registerName nombre que tendra en el json
 * @param {Object} valueInput es un object que contien el valor del input junto con setter
 * @returns 
 */

function InputForm(props) {

    const {title, register, registerName, valueInput} = props

    const onChangeHandler = (event) => valueInput.setter(event.target.value)

    return (<>
             <div class = "inputForm">
                <p class = "titleInputForm">
                    {title}
                </p>
                <input 
                    class= "inputStyleForm"
                    {...register(registerName)}
                    onChange = {onChangeHandler}
                    value = {valueInput.value}
                />
            </div>

    </>)
}

export default InputForm;