import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    /**
     * state variable - super powerful variable (normal js utility function)
     * it maintains the state of your component local state of the component
     *
     * normal js variable
     * const resList = [];
     *
     * state variable
     * const [resList, setResList] = useState([]);
     * 1. useState
     * 2. useEffect
     *
     *
     * Whenever a state variable changes react re-renders
     * the logic of updating dom is called rendering
     * React is doing dom manipulation
     * Whenever a state variable updates react triggers reconciliation cycle (re-renders the component)
     *
     * useEffect is a normal js function which is called when the render is done completely
     * and excutes the callback inside the useeffect
     *
     * Reconciliation Algorithm (React Fiber)
     * - Virtual DOM is representation of actual DOM (all the tags div, h1, ReactElement)
     * Virtual Dom is baisc js object/ virtual dom is object representation of the jsx
     * Diff Algorithm finds out the difference between two virtual dom the previous virtual dom and updated virtual dom
     * then it will calculate the difference and update the dom
     *
     * In React 16 new algorithm came in picture React Fiber
     * Basically it convert both dom in objects and compares
     * comparing two objects is faster instead of comparing two html tags
     * It basically compares the objects and updates it and this is "DIFF ALGORITHM"
     */

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [resToDisplay, setResToDisplay] = useState([]);
    const [searchText, setSearchText] = useState("");
    const filterTopRatedRestaurantsHandler = () => {
        let temp = resToDisplay.filter((el) => +el.info.avgRating > 4);
        setResToDisplay(temp);
    };

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setResToDisplay(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
        setAllRestaurants(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
    };

    useEffect(() => {
        fetchData();
        // setResToDisplay(restaurants);
    }, []);

    // conditional rendering - rendering based on condition
    // if(resToDisplay.length === 0){
    //     return <Shimmer />
    // }

    return resToDisplay.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            console.log(resToDisplay);
                            const temp = allRestaurants.filter((res) =>
                                res.info.name
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase())
                            );
                            console.log(temp);
                            setResToDisplay(temp);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={filterTopRatedRestaurantsHandler}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {/* not using key (not acceptable) <<<< index as key <<<< unique id as key (best practice)*/}
                {resToDisplay.map((el, i) => {
                    return <RestaurantCard key={el.info.name} data={el} />;
                })}
                {/* <RestaurantCard /> */}

                {/* Restaurant Card */}
            </div>
        </div>
    );
};

export default Body;
