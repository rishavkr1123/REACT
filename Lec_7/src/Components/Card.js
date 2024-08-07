
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const res={
    "info": {
      "id": "424558",
      "name": "La Pino'z Pizza",
      "cloudinaryImageId": "mocil3npmwpcdcfaxql1",
      "costForTwo": "₹220 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "isOpen": true,
      "type": "F",
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "cta": {
      "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-gandhi-bazaar-main-road-basavanagudi-bangalore-424558",
      "type": "WEBLINK"
    }
}
 const Card = (props)=>{
    let restraunt= props.Restraunt.info;
    let {name,cloudinaryImageId,cuisines}= restraunt
    const imglink= CDN_URL + `${cloudinaryImageId}`
    const {user } =useContext(UserContext)
    console.log()
    return(
        <div className="card-container">
            <img src={imglink}/>
            <div className="description">
                <h3>{name}</h3>
                <p>{cuisines.toString()}</p>
                <div className="detail">
                   <span>{user.name}</span> <br></br>
                   <span>{user.email}</span> 
                </div>
                
            </div>

        </div>

    )
}
/// /Higher order Component
// input - Restaurantcard => RestaurantCard Promoted

export const PromotedRestaurantcard = (Card)=>{
    return (props)=>{
        return(
            <div className="modifiedCard">
                <div className="promoted-label">
                <label >High Rated</label>
                </div>
                
                <Card {...props}/>

            </div>
        )

    }
}

export default Card;