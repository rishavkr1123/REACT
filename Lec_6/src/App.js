import React from "react";
import ReactDOM from "react-dom"
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact'
import Error from './Components/Error'
import RestaurantMenu from "./Components/RestaurantMenu";
import {createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom'

const  AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Outlet/>
            <Footer/>
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
                path: '/restaurant/:id',
                element: <RestaurantMenu/>
            }

        ],
        errorElement: <Error/>
        
    }
    
   
    
])

const root= ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>)


