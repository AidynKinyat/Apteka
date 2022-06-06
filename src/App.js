import {BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet} from 'react-router-dom'
import HomePage from "./assets/HomePage";
import RegisterPage from "./assets/RegisterPage";
import LoginPage from "./assets/LoginPage";
import Medecines from "./assets/Medecines";
import Admin from "./assets/Admin";
import MOMANDBABY from "./assets/MOMANDBABY";
import Vitamines from "./assets/vitamines";
import Maps from "./assets/Maps";
import React from "react";


function App() {

  return (

  <Router>
        <Routes>

          <Route  path='*' element={<Navigate to={'/'}/>} />
          <Route exaxt path='/' element={<HomePage/>} />
          <Route exaxt path='/map' element={<Maps/>} />
          <Route  path='/register' element={<RegisterPage/>} />
          <Route  path='/login' element={<LoginPage/>} />
          <Route  path='/medecines' element={<Medecines/>} />
          <Route  path='/admin' element={<Admin/>}/>

          <Route  path='/momandbaby' element={<MOMANDBABY/>} />
          <Route  path='/vitamines' element={<Vitamines/>} />



        </Routes>
      </Router>


  );
}

export default App;
