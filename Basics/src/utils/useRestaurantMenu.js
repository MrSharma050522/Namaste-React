import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
	/**
	 * Custom Hook to get data for the component
	 */
	try {
		const [resInfo, setResInfo] = useState({});
		const fetchMenu = async () => {
			const data = await fetch(`${MENU_API}${resId}`);
			const json = await data.json();
			setResInfo(json.data);
		};

		useEffect(() => {
			fetchMenu();
		}, []);

		return resInfo;
	} catch (error) {
		console.error("Error -> ", error);
	}
};

export default useRestaurantMenu;
