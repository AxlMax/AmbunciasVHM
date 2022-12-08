import {useState} from 'react';
import {Form} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import './Login.css'

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faKey} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import {OauthSlice} from '../../storage/features/login/loginSlice'

import Oauth from "../../services/login"

function Login() {

    const dispatch = useDispatch()
    const navigateTo = useNavigate()

    const [size, Ssize] = useState('1')
    const [rEmail, srEmail] = useState('fa-'+ size +'x fa-rotate-0')
    
    const { register, handleSubmit } = useForm();
    
    const onSubmit = async(data) => {
        var res = await (await Oauth(data)).data
    
        if(res !== 'no puede ingresar'){

            dispatch(OauthSlice(res.slice(7)))
            localStorage.setItem('Oauth', res.slice(7))
            navigateTo('/dashboard')

        }else{
            alert('usuario incorrecto')
        }
    }
    
    return (
        <div className="App">
    
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
                        <input className = "rounded" placeholder='@email' {...register("email")}/>
                    </div>
    
                    <div className='containerInput'>           
                        <div class = {rEmail}>
                        <FontAwesomeIcon icon={faKey} className="mb-2"/>
                        </div>
                        <input className = "rounded" placeholder='@contraseña' type = "password" {...register("passwd") }></input>
                    </div> 

                   
                    <input type="checkbox" value="" className='containerCheckbox'/>
                        <label className = "ContainerLabel">
                            mostrar contraseña
                        </label>

                    <button type="submit" className = "mt-5">ingresar</button>
                </Form>
                </div>
            </div>
            </div>
        </div>
    )

}

export default Login;