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
		<div className="header">
			<div className="logo-container">
				<img
					className="logo"
					src={LOGO_URL}
				/>
			</div>
			<div className="nav-items">
				<ul>
					<li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
					<li>
						<Link to="/">Home</Link>
					</li>
					{/**
					 * Never use a anchor tag inside a react app this will reload whole page
					 * Instead we can use "Link" which we can import from "react-router-dom"
					 */}
					{/* <li><a href="/about">About Us</a></li> */}
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="contact">Contact Us</Link>
					</li>
					<li>
						<Link to="/grocery">Grocery</Link>
					</li>
					<li>Cart</li>
					<button
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
