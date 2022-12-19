import axios from 'axios';
import ServerApi from '../../public/contants/contantsService';

const api_url = `${ServerApi}/ambulancia`

/**
 * 
 * @param {Object} body es un Object con la placa y la ubicacion de la ambulancia
 * @param {*} token es el token de oauth 
 * @returns una promesa que resuelta da la ambulancia creada
 */

const Cambulancia = async(body, token) => axios.post(
        `${api_url}/Cambulancia`, body, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        })

export default Cambulancia