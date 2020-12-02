import React from "react";
import { Link } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar'

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <strong>Google Books</strong>
            </Link>
            <div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link
                                to="/"
                                className={
                                    window.location.pathname === "/" || window.location.pathname === "/search"
                                        ? "nav-link active"
                                        : "nav-link"
                                }>
                                Search
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/saved"
                                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                            >
                                Saved
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Nav;