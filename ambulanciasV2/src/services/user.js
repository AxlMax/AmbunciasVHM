import axios from 'axios';
import { useSelector} from "react-redux";
import ServerApi from '../../public/contants/contantsService';

const api_url = `${ServerApi}/user`
/**
 * 
 * @param {String} id  id del usuario
 * @param {String} token token de acceso de aouth
 * @returns funcion asincrona para obtener las ambulancias realacionadas al usuario
 */
const RambulanciasByuser = async(id, token) =>  axios.get(
        `${api_url}/RambulanciasByuser?idc=${id}`,{
            headers: {
              'Authorization': `Bearer ${token}`
            }
        })
/**
 * 
 * @param {String} idc id del documento al cual se le insertara el idl
 * @param {String} idl id del documento que sera insertado dentro de un array dentro del documento de idc
 * @param {String} token token de acceso de aouth
 * @returns funcion asincronica que relaciona dos documentos
 */
const linkAmbulancia = async(idc, idl, token) => axios.patch(
    `${api_url}/linkAmbulancia?idc=${idc}&idl=${idl}`,{},{
        headers: {
          'Authorization': `Bearer ${token}`
        }
    })


export default RambulanciasByuser

export {linkAmbulancia}