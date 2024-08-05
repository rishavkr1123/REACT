import React, {useState} from 'react';
import { useState } from 'react'
import {LOGO_URL} from '../utils/constants' //to import named exports
import { Link } from 'react-router-dom';
const Header = ()=>{
    const [logval,setLogval] = useState("Logout")

    function handleLog(){
      setLogval(logval==="Login"?"Logout":"Login")
      
    }
    return (
      <div className="header">
      <div className="logocon">
        <img src={LOGO_URL}/>
      </div>
      <div className="nav-item">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/grocery">Grocery</Link></li>
        <li><Link to="/">Cart</Link></li>
        <button className="log" onClick={handleLog}>{logval}</button>
      </ul>
        
      </div>
      </div>

    )
}
export default Header