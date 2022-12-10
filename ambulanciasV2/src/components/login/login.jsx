import { useState } from 'react';
import LoginBody from './loginBody';
import WaitPage from '../waitPage/waitPage';

import './Login.css';

function Login() {
    
    const [loading, sLoading] = useState(false)
    return (
        <div className="App">
            {loading ? <WaitPage/> : <LoginBody sl = {sLoading}/>}
        </div>
    )

}

export default Login;