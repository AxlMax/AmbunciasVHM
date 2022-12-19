const server = import.meta.env.VITE_SERVER
const serverPort = import.meta.env.VITE_SERVERPORT

const ServerApi = `http://${server}${serverPort}/api`

export default ServerApi