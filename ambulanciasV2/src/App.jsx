import { Route, Routes } from "react-router-dom"

import Login from './components/login/login'
import NoFound from './components/noFound/noFound';
import Dashboard from './components/dashboard/dashboard';
import Testing from "./components/testing/testing";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <Routes>
      <Route path ="/" element= {<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="*" element={<NoFound/>}/>
      <Route path="/testing" element={<Testing/>}/>
    </Routes>
    </>
  )
}

export default App
