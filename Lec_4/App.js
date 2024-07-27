import React from "react";
import ReactDOM from "react-dom"
import Card from './Card.js'
/*
header{
- logo
- Nav items
}
body{
- search
- card container{
    - cards
    }
}
footer{
    -copyright
    -link
    -Adress
    -Contact
}
*/
// Header component
const Header = ()=>{
    const logo="https://mir-s3-cdn-cf.behance.net/project_modules/hd/25539c29532269.55f7d6a0a8c71.jpg";
    return (
      <div className="header">
      <div className="logocon">
        <img src={logo}/>
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
const Body = ()=>{
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search Restraunt...."/>
                <button className="searchbtn">Search</button>
            </div>
            <div className="res-container">

            </div>

        </div>
    )
}



const  AppLayout = () => {
    return(
        <div className="app">
        <Header/>
        <Body/>

        </div>
    )

}

const root= ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout/>)


