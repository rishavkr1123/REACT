import React from "react"
import ReactDOM from "react-dom"

// React Elements, it is an object
//  const heading = React.createElement('h1',{id:"heading"},"Hello")// It creates an object
// 
///using jsx(This does not come under js, js engine can not understand jsx )
// if it is not a part of js how does js engine understand it?
// Basically parcel is doing that for us. parcel(babel helps in this) transpiles the code before it reaches the js engine
// React Element
const jsxheading = <h1>I am jsx</h1>//this is also an object first it is converted(babel is doing this) to ReactElement, it means virtually it is react.createlement
// if we are writing multiple line of 

// Above method is very tedious so we use jsx

/// React component
// class based components- old
// Functional components- new(A normal jjs function)

const Title = ()=>{ //returns jsx
    return (
        <h1>Hey, I am title</h1>
    )

}
const HeadingComponent = ()=>{ //returns jsx
    return (
        

        <h1>
            <title/>
            Hey, I am a simple functional component</h1>
    )

}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
    <Title/>
    <HeadingComponent/>
    </>

)
// Component composition: composing more than one components in one


