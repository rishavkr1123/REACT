import { useState,useEffect } from "react"

 const  useRestaurantData = (id)=>{

    const [Resobj,setResObj] = useState(null)
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
        // console.log(selectedRestaurant)
        // setRes(restaurants);
        setResObj(prevres=> selectedRestaurant);
        

    }
    return Resobj

}
export default useRestaurantData