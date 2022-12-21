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

const Dambulancia = async(id, token) => axios.delete(
        `${api_url}/Dambulancia?id=${id}`,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
      })

const RgpsByambulancia = async(id, token) => axios.get(
      `${api_url}/RgpsByambulancia?idc=63a046ddba8de3ce8815b78e`,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
    } 
)

export default Cambulancia

export {Dambulancia, RgpsByambulancia}