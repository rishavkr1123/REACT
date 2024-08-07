
import { CDN_URL } from "../utils/constants";

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
    console.log()
    return(
        <div className="card-container">
            <img src={imglink}/>
            <div className="description">
                <h3>{name}</h3>
                <p>{cuisines.toString()}</p>
                <div className="detail">
                    <div>
                    

                    </div>
                </div>
                
            </div>

        </div>

    )
}
export default Card;