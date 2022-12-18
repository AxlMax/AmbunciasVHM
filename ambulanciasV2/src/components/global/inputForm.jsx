import "./Global.css"

/**
 * 
 * @param {*} props 
 * @param title es el titulo que tendra el input en el formulario
 * @param register es el metodo de use-form que me permite crear el json
 * @param registerName nombre que tendra en el json
 * @returns 
 */

function InputForm(props) {

    const {title, register, registerName} = props

    return (<>
             <div class = "inputForm">
                <p class = "titleInputForm">
                    {title}
                </p>
                <input 
                    class= "inputStyleForm"
                    {...register(registerName)}
                />
            </div>

    </>)
}

export default InputForm;