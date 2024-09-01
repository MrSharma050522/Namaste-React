import { useEffect, useState } from "react";

const User = (props) => {
	const [userDetails, setUserDetails] = useState({
		name: "Dummy",
		role: "Test",
		location: "Default",
	});

	const fetchData = async () => {
		const data = await fetch("https:/api.github.com/users/raghav");
		const json = await data.json();
		setUserDetails(json);
	};

	useEffect(() => {
		fetchData();
		let timer = setInterval(() => {
			console.log(
				"ComponentDidMount to show use of ComponentWillUnmount"
			);
		}, 1000);
		return () => {
			console.log("User Return Called");
			clearInterval(timer);
		};
	}, []);
	return (
		<div className="user-card">
			<h2>Name: {userDetails.name}</h2>
			<h3>Role: {userDetails.role}</h3>
			<h4>Loaction: {userDetails.location}</h4>
		</div>
	);
};

export default User;
