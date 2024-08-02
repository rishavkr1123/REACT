import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';



function RestaurantMenu(){
    const [res,setRes] = useState([])
    const [Resobj,setResObj] = useState(null)
    const {id} = useParams();
    console.log(id)
    useEffect(()=>{
        fetchData()
    },[id])
    const fetchData= async()=>{
        const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const jsonData = await response.json();
        const restaurants = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        
        // Filter directly after setting res
        const selectedRestaurant = restaurants.find(val => val.info.id === id);
        setRes(restaurants);
        setResObj(selectedRestaurant);

    }
    
    // const {name,avgRating,cuisines}= Resobj
    return (!Resobj)?<Shimmer/>:(
         <div className='restaurantMenu'>
             {/* <h1>Restaurant Menu</h1> */}
            <div className='res-summary'>
                <h1>{Resobj.info.name}</h1>
                <div className='rating'>
                    <span><i class="fa-solid fa-star"></i>{Resobj.info.avgRating
                    }</span>
                </div>
            </div>
            <div className='menu'>
                <h2>Menu</h2>
                <ul>
                    {Resobj.info.cuisines.map((item,i)=>(
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )

}
export default RestaurantMenu
