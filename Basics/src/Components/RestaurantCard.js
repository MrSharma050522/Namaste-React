import { CDN_LINK } from "../utils/constant";
const styleCard = {
	backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
	// console.log(props)
	return (
		<div
			className="res-card m-4 p-4 w-[250px] rounded-lg bg-[#f0f0f0] hover:bg-gray-400"
			// style={styleCard}
		>
			<img
				className="res-logo rounded-lg"
				src={CDN_LINK + props.data.info.cloudinaryImageId}
				alt="res-logo"
			/>
			<h3 className="font-bold py-1 text-lg">{props.data.info.name}</h3>
			<h4>{props.data.description}</h4>
			<h4 className="overflow-hidden">
				{props.data.info.cuisines.join(",")}
			</h4>
			<h4>{props.data.info.avgRating} Stars</h4>
			<h4>{props.data.info.sla.deliveryTime}</h4>
		</div>
	);
};

export default RestaurantCard;
