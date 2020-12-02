import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
            <Navbar bg="dark" variant="dark" />
            <Navbar.Brand href="/">Google Books</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link  className={window.location.pathname === "/search" ? "nav-link=active" : "nav-link"} href="/search">Search</Nav.Link>
                <Nav.Link className={window.location.pathname === "/saved" ? "nav-link=active" : "nav-link"} href="/saved">Saved</Nav.Link>
            </Nav>
        </>
    )
}

export default Nav;