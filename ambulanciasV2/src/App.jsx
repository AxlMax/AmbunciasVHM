import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from "react-router-dom"

import Login from './components/login/login'
import NoFound from './components/noFound/noFound';
import Dashboard from './components/dashboard/dashboard';

function App() {

  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="*" element={<NoFound/>}/>
    </Routes>
    </>
  )
}

export default App
