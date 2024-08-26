import { CDN_LINK } from "../utils/constant";
const styleCard = {
    backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
    return (
        <div className="res-card" style={styleCard}>
            <img
                className="res-logo"
                src={CDN_LINK + props.data.info.cloudinaryImageId}
                alt="res-logo"
            />
            <h3>{props.data.info.name}</h3>
            <h4>{props.data.description}</h4>
            <h4>{props.data.info.cuisines.join(",")}</h4>
            <h4>{props.data.info.avgRating} Stars</h4>
            <h4>{props.data.info.sla.deliveryTime}</h4>
        </div>
    );
};

export default RestaurantCard;
