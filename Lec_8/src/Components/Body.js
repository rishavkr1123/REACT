import React, {useState, useEffect} from 'react'
import Card from './Card'
import RestrauntList from '../utils/RestrauntList'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import {SearchBynames} from '../utils/helper'
import useOnlineStatus from '../utils/useOnlinestatus'





// Hook is normal js function given by react
const Body = ()=>{
    //state variable: it maintains the state of the component
    const [restraunt,setRestraunt] = useState(RestrauntList)
    const [filterrestraunt,setFilterRestraunt] = useState(RestrauntList)
    const [searchtext,setSearchtext] = useState("")

    useEffect(()=>{// It will get called after the component has been rendered
        fetchData()

    },[])
    const fetchData= async()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const jsonData = await data.json();
        // console.log(jsonData.data.cards[1].card.card.gridElements.infoWithStyle?.restaurants)
        setRestraunt(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestraunt(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
     const onLineStatus = useOnlineStatus()
     if(onLineStatus===false){
        return (
            <h1>Looks like you are offline. Please check your internet connection</h1>
        )
     }
    
    const res = filterrestraunt?.map(Restraunt=> <Link to = {"/restaurant/" + Restraunt.info.id}><Card Restraunt = {Restraunt}/></Link>)

    function searchTopRatedReastraunt(){
        const newres= restraunt.filter((obj,i)=>obj.info.avgRating>=4.5)
        // console.log(prevres=>newres)
        setFilterRestraunt(prevres=>newres)
    }
    function Searchbytext(){
        const newres = SearchBynames(restraunt,searchtext)
        setFilterRestraunt(prevres=>newres)
    }
    function handleSearchChange(e){
        setSearchtext(e.target.value)
    }
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search Restraunt...." value={searchtext} onChange={handleSearchChange}/>
                <button className="searchbtn" onClick={Searchbytext}>Search</button>
                <button className="toprated-btn" onClick={searchTopRatedReastraunt}>Top-rated</button>
            </div>
            <div className="res-container">
                {res}
                

            </div>

        </div>
    )
}
export default Body