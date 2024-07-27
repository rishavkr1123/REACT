import React from "react"
import ReactDOM from "react-dom"

/// Using react.createelement()
const headerElement= React.createElement('header',{},
    React.createElement('div',{
        class: "title"
    },
        [React.createElement('h1',{},"I am h1"),
        React.createElement('h2',{},"I am h2"),
        React.createElement('h3',{},"I am h3")
        ]
    )
)

/// Using jsx
const headerElementUjsx= (
    <header>
        <div className="title">
            <h1>I am h1 using jsx</h1>
            <h2>I am h2 using jsx</h2>
            <h3>I am h2 using jsx</h3>
        </div>
    </header>
)
// Using functional component
const HeaderFunctionalComponent= () =>{
    return (
        <header>
        <div className="title">
            <h1>I am h1 using fc</h1>
            <h2>I am h2 using fc</h2>
            <h3>I am h2 using fc</h3>
        </div>
    </header>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(HeaderFunctionalComponent())
