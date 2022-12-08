import axios from 'axios';

const server = import.meta.env.VITE_SERVER
const serverPort = import.meta.env.VITE_SERVERPORT


const api_url = `http://${server}${serverPort}/api/login/oauth`

const Oauth = async(body) => axios.post(api_url, body)

export default Oauth
