import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState({});
    const { resId } = useParams();

    const fetchMenu = async () => {
        const data = await fetch(`${MENU_API}${resId}`);
        const json = await data.json();
        console.log(json.data);
        setResInfo(json.data);
    };

    useEffect(() => {
        fetchMenu();
    }, []);

    if (resInfo === null) return <Shimmer />;
    return (
        <div className="menu">
            <h3>
                {resInfo?.cards?.length > 0
                    ? resInfo?.cards[2]?.card?.card?.info?.cuisines.join(",")
                    : ""}
            </h3>
            <h1>
                {resInfo?.cards?.length > 0
                    ? resInfo?.cards[2]?.card?.card?.info?.name
                    : ""}
            </h1>
            <h3>
                {resInfo?.cards?.length > 0
                    ? resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage
                    : ""}
            </h3>
            <h2>Menu</h2>
            <ul>
                {resInfo?.cards?.length > 0 &&
                    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
                        (el, i) => {
                            return <li key={i + 1}>{el.card.card.title}</li>;
                        }
                    )}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
