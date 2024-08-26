import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    /**
     * As setBtnName is updated the btnName changes but this is const
     * so ans to this is as it updates it renders the whole component then the
     * btnName variable is whole new and the value assigned is also new
     */
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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
