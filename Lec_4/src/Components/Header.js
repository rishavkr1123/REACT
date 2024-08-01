
import {LOGO_URL} from '../utils/constants' //to import named exports
const Header = ()=>{
    
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
      </ul>
        
      </div>
      </div>

    )
}
export default Header