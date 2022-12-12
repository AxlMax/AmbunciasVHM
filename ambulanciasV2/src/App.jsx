import { Route, Routes } from "react-router-dom"

import Login from './page/login'
import NoFound from './page/noFound';
import Dashboard from './page/dashboard';
import Testing from "./components/testing/testing";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="*" element={<NoFound/>}/>
      <Route path="/testing" element={<Testing/>}/>
    </Routes>
    </>
  )
}

export default App
