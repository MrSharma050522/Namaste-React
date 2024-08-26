import RestaurantCard from "./RestaurantCard";
import  restaurants  from "../utils/mockData";
import { useEffect, useState } from "react";

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
     * 
     * Reconciliation Algorithm (React Fiber) 
     * - Virtual DOM is representation of actual DOM (all the tags div, h1, ReactElement)
     * Virtual Dom is baisc js object 
     * Diff Algorithm finds out the difference between two virtual dom the previous virtual dom and updated virtual dom
     * then it will calculate the difference and update the dom
     * 
     * In React 16 new algorithm came in picture React Fiber 
     * Basically it convert both dom in objects and compares 
     * comparing two objects is faster instead of comparing two html tags 
     * It basically compares the objects and updates it and this is "DIFF ALGORITHM"
     */

    let [resToDisplay, setResToDisplay] = useState([]);
    const filterTopRatedRestaurantsHandler = () => {
        let temp = restaurants.filter((el) => +el.rating > 4.5);
        setResToDisplay(temp);
    }

    useEffect(()=>{
        setResToDisplay(restaurants);
    },[])

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={filterTopRatedRestaurantsHandler}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {/* not using key (not acceptable) <<<< index as key <<<< unique id as key (best practice)*/}
                {resToDisplay.map((el, i) => {
                    return <RestaurantCard key={el.name} data={el} />;
                })}
                {/* <RestaurantCard /> */}

                {/* Restaurant Card */}
            </div>
        </div>
    );
};

export default Body;
