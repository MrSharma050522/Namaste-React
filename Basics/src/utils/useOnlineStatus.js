import { useEffect, useState } from "react";

const useOnlineStatus = () => {
	try {
		const [onlineStatus, setOnlineStatus] = useState(true);
		useEffect(() => {
			window.addEventListener("offline", () => {
				setOnlineStatus(false);
			});
			window.addEventListener("online", () => {
				setOnlineStatus(true);
			});
		}, []);

		return onlineStatus;
	} catch (error) {
		console.error("Error -> ", error);
	}
};

export default useOnlineStatus;
