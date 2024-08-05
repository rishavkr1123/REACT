
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantData from '../utils/UseRestaurantData'


function RestaurantMenu(){
    const detail= useParams()
    console.log(detail)
    const {id} = useParams();
    const Resobj= useRestaurantData(id);
    console.log(Resobj)
    
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
