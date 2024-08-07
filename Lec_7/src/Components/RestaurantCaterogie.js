import React, {useState,useEffect} from 'react'
import ItemList from "./ItemList"
function RestaurantCategories(props){
    // const [isOpen, setIsOpen] = useState(false);
    const downangle= "⌄"
    const upangle= "˄"
    

    

    return (
        <div className="res-category">
            <div className="res-title" onClick={props.handleClick}>
                <span className="angle">{props.tag}</span>
                <span className="angle" >{props.is?upangle:downangle}</span>
                {/* <i className="fa-solid fa-angle-down"></i> */}
            </div>
            
                {props.is &&<ItemList /> }
                {/* <ItemList /> */}
            
        </div>
    );
}
export default RestaurantCategories