import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { ITEM_IMG_CDN_URL } from "../constant";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () =>{
    const resId = useParams();
    const restaurant = useRestaurant(resId);
    return !restaurant ? (<Shimmer/>):(
    <div className="menu">
    <div>
        <h1>restaurant id:{resId}</h1>
        <img src={ITEM_IMG_CDN_URL + restaurant.cloudinaryImageId}/>
        <h2>{restaurant.name}</h2>
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating}</h3>
    </div>
    <div>
        <h1>Menu</h1>
        <ul>
            {Object.values(restaurant?.menu?.items).map((item)=>(
            <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
    </div>
    );
};
export default RestaurantMenu;