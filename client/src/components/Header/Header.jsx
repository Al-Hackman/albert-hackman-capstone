import React from 'react';
import logo from '../../assets/logo/logo.JPG';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './header.scss';



function Header() {
    return (
        <nav className="navbar">
                <div className="navbar__logo-wrap">
                    <Link to="/" className="navbar__logo-link">
                        <img src={logo} className="navbar__logo" alt="Logo" />
                    </Link>
                </div>
                <div className="navbar__list-wrap">

                    <Link to="/services" className="navbar__item-link">
                        <span className="navbar__item">Services</span>
                    </Link>

                    <Link to="/contact" className="navbar__item-link">
                        <span className="navbar__item">Contact</span>
                    </Link>

                    <NavLink to="/login" activeClassName="navbar--active" className="navbar__btn-link">
                        <button className="navbar__login">Login</button>
                    </NavLink>
                </div>
        </nav>
    )
}

export default Header;
