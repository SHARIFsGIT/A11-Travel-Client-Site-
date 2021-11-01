import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" /> 
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                {user.email && <NavLink to="/review">Package Review</NavLink>}
                <NavLink to="/inventory">About Us</NavLink>
                {user.email && <span className="display-name" >{user.displayName} </span>}
                {
                    user.email ?
                        <button className="button" onClick={logOut}>Log out</button>
                        :
                        <NavLink to="/login">Login</NavLink>}         
            </nav>
        </div>
    );
};

export default Header;