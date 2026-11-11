
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                {/* Brand Name */}
                <Link className="navbar-brand" to="/">
                    My React App
                </Link>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarMenu">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/services">
                                Services
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/products">
                                Products
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
