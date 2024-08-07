import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom"
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact'
// import Grocery from './Components/Grocery'
import Error from './Components/Error'
import RestaurantMenu from "./Components/RestaurantMenu";
import {createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom'
import useOnlineStatus from './utils/useOnlinestatus'
import UserContext from './utils/UserContext'

//Lazy Loading
const Grocery= lazy(()=>{
    import('./Components/Grocery')
})


const  AppLayout = () => {
    const [user, setUser] = useState({
        name: "rahul",
        email: "rahul@gmail.com"

    })
    const onLineStatus = useOnlineStatus()
     if(onLineStatus===false){
        return (
            <h1>Looks like you are offline. Please check your internet connection</h1>
        )
     }
    return(
        <div className="app">
            <UserContext.Provider
                value={{
                    user:user,
                    setuser: setUser
                }}
            >
                <Header/>
                <Outlet/>
                <Footer/>
            </UserContext.Provider>
            
        </div>
    )

}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children:[
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <AboutUs/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/grocery',
                element: <Suspense fallback ={<h1>Loading...</h1>}><Grocery/></Suspense>
            },
            {
                path: '/restaurant/:id',
                element: <RestaurantMenu/>
            }

        ],
        errorElement: <Error/>
        
    }
    
   
    
])

const root= ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>)


