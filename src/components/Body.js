import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { swiggy_api_URL } from "../constant";
import {Link} from "react-router-dom";
import { filterData } from "../utils/utils";
import useOnline from "../utils/useOnline";
import Carousel from "./Carousel";


const Body = () => {
    // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
    const [searchText,setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurant] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const isOnline = useOnline();
    
    if(!isOnline){
        return(
            <div  className="container">
                <h1>Please Check your Internet Connection</h1>
            </div>
        )
    }
    // use useEffect for one time call getRestaurants using empty dependency array
    useEffect(()=>{
        getRestaurants();
    }, []);

    // async function getRestaurant to fetch Swiggy API data
    async function getRestaurants(){
        try{
        const data = await fetch(swiggy_api_URL);
        const json = await data.json();
        // updated state variable restaurants with Swiggy API data
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        }catch(error){
            console.log(error);
        }
    }
    // use searchData function and set condition if data is empty show error message
    const searchData = (searchText, restaurants) =>{
        if(searchText!==""){
            const data = filterData(searchText, restaurants);
            setFilteredRestaurant(data);
            setErrorMessage("");
            if(data.length===0){
                setErrorMessage("No matches restaurant found");
            }
        }else{
            setErrorMessage("");
            setFilteredRestaurant(restaurants);
        }
    };
    // if allRestaurants is empty don't render restaurants cards
    if(!allRestaurants) return null;

    return (
        <div className="container">
            <Carousel/>
        <div className="flex justify-start mob:flex-col">
        <div className="flex justify-evenly min-w-[500px] mob:min-w-[375px] h-[100px] mob:h-[50px] items-center m-auto"> 
            <input type="text"
            className="outline-none text-base mob:text-xs p-[5px] rounded-sm basis-[350px] mob:basis-[270px] h-[35px] ring-1 ring-white bg-gray-light " key="input-text"
            placeholder="search"
            value={searchText}
            onChange={(e) =>
            setSearchText(e.target.value)}
            ></input>
            <button 
                className="btn btn--primary basis-[60px] rounded-sm mob:basis-[50px] mob:text-xs hover:bg-blue-dark hover:text-white "
                onClick={() =>{
                    searchData(searchText,allRestaurants);
                }}
            >
                Search
            </button>
        </div>
        </div>
        {errorMessage && <div className="error-container">{errorMessage}</div>}

        {allRestaurants?.length===0 ? (
            <Shimmer/>
        ):(
        <div className="flex flex-wrap gap-5 justify-center">
        {filteredRestaurants.map((restaurant)=>{
            return(
                <Link
                className="basis-[250px] p-2.5 mb-2.5 mob:basis-[150px]"
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
            >
                <RestaurantCard {...restaurant.data} />
            </Link>
            );
        })}
        </div>
        )}
        </div>
    );
    };

export default Body;