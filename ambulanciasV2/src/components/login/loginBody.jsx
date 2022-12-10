import {useState} from 'react';
import {Form} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faKey} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import {OauthSlice} from '../../storage/features/login/loginSlice'

import Oauth from "../../services/login"

function LoginBody(props) {

    const {sl} = props

    const dispatch = useDispatch()
    const navigateTo = useNavigate()

    const [size, Ssize] = useState('1')
    const [rEmail, srEmail] = useState('fa-'+ size +'x fa-rotate-0')
    const [password , sPassword] = useState('password')

    const { register, handleSubmit } = useForm();

    const showPass = (event) => {
        if(event.target.checked){
            sPassword('text')
        }else{
            sPassword('password')
        }
    }

    const onSubmit = async(data) => {

        sl(true)
        var res = await (await Oauth(data)).data
        sl(false)

        if(res !== 'no puede ingresar'){

            dispatch(OauthSlice(res.slice(7)))
            localStorage.setItem('Oauth', res.slice(7))
            navigateTo('/dashboard')

        }else{
            alert('usuario incorrecto')
        }
    }

    return <>
        <div class="container">
            <div class="row g-1">
                <div class="col">
                    <div className = "image">
                        <img src="/tracking.png" class="img-fluid"/>
                    </div>
                </div>
                <div class="col">
                <Form className = "p-sm-3" onSubmit={handleSubmit(onSubmit)}>
    
                    <div className="containerInput">
                        <div class = {rEmail}>
                        <FontAwesomeIcon icon={faEnvelope} className = "mb-2"/>
                        </div>
                        <input className = "inputLogin" placeholder='@email' {...register("email")}/>
                    </div>
    
                    <div className='containerInput'>           
                        <div class = {rEmail}>
                        <FontAwesomeIcon icon={faKey} className="mb-2"/>
                        </div>
                        <input className = "inputLogin" placeholder='@contraseña' type = {password} {...register("passwd") }></input>
                    </div> 

                   
                    <input type="checkbox" value="" className='containerCheckbox' onChange={showPass}/>
                        <label className = "ContainerLabel">
                            mostrar contraseña
                        </label>

                    <div className = "buttonContainerLogin">
                        <div class = "d-flex justify-content-center">
                            <button type="submit" className = "buttonLogin">ingresar</button>
                        </div>
                        <div class = "d-flex justify-content-center">
                            <button className = "buttonRegister">registrarse</button>
                        </div>
                    </div>
                </Form>
                </div>
            </div>
        </div>
    </>;
}

export default LoginBody;