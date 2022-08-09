import React, {useState} from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtnLink, NavAuth} from './NavbarElements'
import auradeitylogo from '../../Logo/auradeitylogo.png'
import '../logout.js';
import { render } from 'react-dom';

function alert()
{
  return(window.alert("Logout successfull"))
};
async function handleLogout(event){
    console.log("remove");
    sessionStorage.removeItem('token');
    alert() 
    }


const Navbar = () => {
  return (
    <>
     <Nav>
        <NavLink to="/">
            <div>

        <img style={{height: 80,
          width: 80}}src={auradeitylogo} alt="logo"/>
            </div>
        </NavLink>
        <Bars/>
        <NavMenu>
            
            <NavLink to="/weather"> 
                Weather
            </NavLink>
        </NavMenu>
        <NavAuth>
              
              <NavLink to="/signup">
                  Sign up
              </NavLink>
         
              <NavBtnLink to="/login">
                  Sign In
              </NavBtnLink>

              <button class="button logout__submit" onClick={handleLogout}>
    <span class="button__text" >Sign Out</span>
    <i class="button__icon fas fa-chevron-right"></i>
  </button> 
            
        </NavAuth>
     </Nav>
    </>
  )
}


export default Navbar
