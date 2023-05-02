import { useState, useEffect } from "react";
import { swiggy_menu_api_URL } from "../constant";

const useRestaurant = (resId) => {
    const[restaurant, setRestaurant] = useState(null);

    useEffect( ()=>{
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo(){
        const data = await fetch(swiggy_menu_api_URL + resId);
        const json = await data.json();
        setRestaurant(json.data);
    }

    return restaurant;
};
export default useRestaurant;