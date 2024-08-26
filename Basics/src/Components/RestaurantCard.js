const styleCard = {
    backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={props.data.imgSrc} alt="res-logo" />
            <h3>{props.data.name}</h3>
            <h4>{props.data.description}</h4>
            <h4>{props.data.rating} Stars</h4>
            <h4>{props.data.deliveryTime}</h4>
        </div>
    );
};

export default RestaurantCard;
