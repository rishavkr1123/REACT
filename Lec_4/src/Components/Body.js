import React, {useState} from 'react'
import Card from './Card'
import RestrauntList from '../utils/RestrauntList'

// Hook is normal js function given by react


const Body = ()=>{
    //state variable: it maintains the state of the component
    const [restraunt,setRestraunt] = useState(RestrauntList)
    const res = restraunt.map(Restraunt=> <Card Restraunt = {Restraunt}/>)

    function searchTopRatedReastraunt(){
        const newres= restraunt.filter((obj,i)=>obj.info.avgRating>=4)
        // console.log(prevres=>newres)
        setRestraunt(prevres=>newres)
    }
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search Restraunt...."/>
                <button className="searchbtn">Search</button>
                <button className="toprated-btn" onClick={searchTopRatedReastraunt}>Top-rated</button>
            </div>
            <div className="res-container">
                {res}
                

            </div>

        </div>
    )
}
export default Body