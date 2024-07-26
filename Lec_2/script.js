import React from "react"
import ReactDOM from "react-dom"
const parent= React.createElement('div',{
    id:'parent'
},
[
React.createElement('div',{
    id:'child'
},
[React.createElement("h1",{
    id:'heading'
}, "Hey How are you"), 
React.createElement("h2",{
    id:'heading2'
}, "Hey How are you") ]
),
React.createElement('div',{
    id:'child'
},
[React.createElement("h1",{
    id:'heading'
}, "Hey How are you"), 
React.createElement("h2",{
    id:'heading2'
}, "Hey How are you, I am learning react") ]
)
]
)
console.log(parent)

// const heading = React.createElement("h2",{
//     id:'heading'
// }, "Hey How are you") //heading here represents a virtual DOM element <h2>
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)


