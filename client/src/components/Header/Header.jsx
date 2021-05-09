import React from 'react';
import logo from '../../assets/logo/logo.JPG';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './header.scss';



function Header() {
    return (
        <nav className="navbar-main">
                <div className="navbar-main__logo-wrap">
                    <Link to="/" className="navbar-main__logo-link">
                        <img src={logo} className="navbar-main__logo" alt="Logo" />
                    </Link>
                </div>
                <div className="navbar-main__list-wrap">

                    <Link to="/services" className="navbar-main__item-link">
                        <span className="navbar-main__item">Services</span>
                    </Link>

                    <Link to="/contact" className="navbar-main__item-link">
                        <span className="navbar-main__item">Contact</span>
                    </Link>

                    <NavLink to="/users/sign-in" activeClassName="navbar-main--active" className="navbar-main__btn-link">
                        <button className="navbar-main__login">Login</button>
                    </NavLink>
                </div>
        </nav>
    )
}

export default Header;
