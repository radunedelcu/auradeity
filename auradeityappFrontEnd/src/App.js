

import './components/login.js'
// import './App.css'
import React  from 'react'
import Login from './components/login.js';
import Register from './components/register.js';
import Navbar from './components/Navbar/index.js';
import Weather from './components/weather.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,

} from 'react-router-dom';
import './index.js'
import { useEffect, useState } from "react";

function App() {
 
  
  return (
    <Router>
      <Navbar/>
      
    <Routes>
 {/* <Route exact path='/' element={<  />}></Route> */}
 <Route exact path='/signup' element={< Register/>}></Route>
 <Route exact path='/login' element={< Login/>}></Route>
 <Route exact path="/weather" element={<Weather/>}></Route>


    </Routes>
    </Router>
    );
  
  }

export default App;
