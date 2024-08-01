import React, {useState} from 'react';
import { useState } from 'react'
import {LOGO_URL} from '../utils/constants' //to import named exports
const Header = ()=>{
    const [logval,setLogval] = useState("Logout")
    function handleLog(){
      if(logval==="Logout"){
        setLogval("Login")
      }
      else{
        setLogval("Logout")
      }
    }
    return (
      <div className="header">
      <div className="logocon">
        <img src={LOGO_URL}/>
      </div>
      <div className="nav-item">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <button className="log" onClick={handleLog}>{logval}</button>
      </ul>
        
      </div>
      </div>

    )
}
export default Header