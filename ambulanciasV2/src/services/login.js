import axios from 'axios';
import ServerApi from '../../public/contants/contantsService';

const api_url = `${ServerApi}/login/oauth`

const Oauth = async(body) => axios.post(api_url, body)

export default Oauth
