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
const RambulanciasByuser = async(id, token) => {

    return axios.get(
        `${api_url}/RambulanciasByuser?idc=${id}`,{
            headers: {
              'Authorization': `Bearer ${token}`
            }
        })}
export default RambulanciasByuser