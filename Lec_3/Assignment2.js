import React from "react";
import ReactDOM from "react-dom"



const Heading = () => {
    const logo= "https://prompti.ai/wp-content/uploads/2023/07/pcboi2.png"
    const userIcon= ""
    return (
        <header>
            <div className="title">
                <img src={logo} className="logo"/>
                <input type="text" placeholder="Search...." id="search"/>
                <i class="fa-solid fa-user" id="userIcon"/>
                {/* <h1>I am h1 using fc</h1> */}
            </div>
        </header>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(Heading())