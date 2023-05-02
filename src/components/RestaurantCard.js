import {IMG_CON_URL} from "../constant"

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
    }) => {
    return (
        <div className="shadow-lg hover:scale-105 h-full">
        <img className="w-full mob:w-[130px]" src={IMG_CON_URL + 
        cloudinaryImageId } />
        <h2 className="text-base font-semibold w-3/5 tracking-normal pl-1">{name.toUpperCase()}</h2>
        <h4 className="text-gray-dark text-xs w-4/5 overflow-hidden ht-[32px] pl-1">{cuisines.join(", ")}</h4>
        <h4 className="text-xs w-4/5 overflow-hidden h-[20px] pl-1">{area}</h4>
        <div className="flex mt-4 justify-between items-center text-xs pb-2.5 text-gray-details font-semibold mob:flex-col mob:items-start">
        <span className="text-gray-dark text-xs w-4/5 overflow-hidden ht-[32px]">⭐{avgRating}</span>
        <h6 className="text-gray-dark text-xs w-4/5 overflow-hidden">{lastMileTravelString}</h6>
        <h6 className="text-gray-dark text-xs w-4/5 overflow-hidden">{costForTwoString}</h6>
        </div>
        </div>
    );
    };

    export default RestaurantCard;