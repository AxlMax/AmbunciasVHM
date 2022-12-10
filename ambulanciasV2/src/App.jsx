import { Route, Routes } from "react-router-dom"

import Login from './components/login/login'
import NoFound from './components/noFound/noFound';
import Dashboard from './components/dashboard/dashboard';
import WaitPage from "./components/waitPage/waitPage";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="*" element={<NoFound/>}/>
      <Route path="/testing" element={<WaitPage/>}/>
    </Routes>
    </>
  )
}

export default App
