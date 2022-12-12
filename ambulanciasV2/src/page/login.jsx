import { useState } from 'react'
import LoginBody from '../components/loginBody'
import WaitPage from './waitPage'

import '../css/Login.css';

function Login() {
    
    const [loading, sLoading] = useState(false)
    return (
        <div className="App">
            {loading ? <WaitPage/> : <LoginBody sl = {sLoading}/>}
        </div>
    )

}

export default Login;