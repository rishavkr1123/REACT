import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantData from '../utils/UseRestaurantData'
import RestaurantCategories from './RestaurantCaterogie';
import { useState } from 'react';

function RestaurantMenu(){
    const [ind, setInd] = useState(-1);
    function handleRescat(index){
        setInd(index)
    }

    const detail= useParams()
    console.log(detail)
    const {id} = useParams();
    const Resobj= useRestaurantData(id);
    console.log(Resobj)
    const categories = ["Recommended","Newly Added", "Dessert" ]
    return (!Resobj)?<Shimmer/>:(
         <div className='resMenu-container'>
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
                </div >
                {/* {Catories accordian} */}
                {categories.map((rescat, index)=><RestaurantCategories tag= {rescat} is = {index===ind} handleClick = {()=>{(ind===index)?handleRescat(-1):handleRescat(index)} }/>)}
            </div>
        </div>
         
    )

}
export default RestaurantMenu
