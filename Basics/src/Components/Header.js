import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
	const [btnName, setBtnName] = useState("Login");
	/**
	 * As setBtnName is updated the btnName changes but this is const
	 * so ans to this is as it updates it renders the whole component then the
	 * btnName variable is whole new and the value assigned is also new
	 *
	 * Without dependency array useeffect is called everytime there is a render
	 * if the dependency array is empty is called on only initial render
	 * if the dependency array has any variable it re-renders when the variable changes its state or updated
	 */

	const onlineStatus = useOnlineStatus();

	useEffect(() => {
		console.log("Inside Header Component");
	}, []);
	return (
		<div className="header flex justify-between bg-pink-200 shadow-lg mb-1 sm:bg-green-600 lg:bg-pink-200">
			<div className="logo-container">
				<img
					className="logo w-56"
					src={LOGO_URL}
				/>
			</div>
			<div className="nav-items flex items-center">
				<ul className="flex p-4 m-4">
					<li className="px-4">
						Online Status: {onlineStatus ? "🟢" : "🔴"}
					</li>
					<li className="px-4">
						<Link to="/">Home</Link>
					</li>
					{/**
					 * Never use a anchor tag inside a react app this will reload whole page
					 * Instead we can use "Link" which we can import from "react-router-dom"
					 */}
					{/* <li><a href="/about">About Us</a></li> */}
					<li className="px-4">
						<Link to="/about">About Us</Link>
					</li>
					<li className="px-4">
						<Link to="contact">Contact Us</Link>
					</li>
					<li className="px-4">
						<Link to="/grocery">Grocery</Link>
					</li>
					<li className="px-4">Cart</li>
					<button
						className="px-4 bg-gray-500 cursor-pointer rounded-lg"
						onClick={() => {
							setBtnName((btn) =>
								btn === "Login" ? "LogOut" : "Login"
							);
						}}
					>
						{btnName}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
