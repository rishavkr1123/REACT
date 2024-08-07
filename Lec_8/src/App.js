import React, { lazy, Suspense } from "react";
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


//Lazy Loading
const Grocery= lazy(()=>{
    import('./Components/Grocery')
})


const  AppLayout = () => {
    const onLineStatus = useOnlineStatus()
     if(onLineStatus===false){
        return (
            <h1>Looks like you are offline. Please check your internet connection</h1>
        )
     }
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


