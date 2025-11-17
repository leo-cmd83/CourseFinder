import React from "react";
import logo from "../assets/logo.png";
import {Link} from "react-router-dom";
import "../style/Header.css";

const Header: React.FC = () => {
    return (
        <header>
            <Link to="/">
                <img
                    src={logo}
                    alt="logo"
                    className="logo"
                />
            </Link>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/universities">Universities</Link></li>
                    <li><Link to="/courses">Find Courses</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
