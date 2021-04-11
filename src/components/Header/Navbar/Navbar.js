/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import profileIcon from '../../../assets/icons/profileIcon.png';
import searchIcon from '../../../assets/icons/search.svg';
import cartIcon from '../../../assets/icons/shopping-bag.svg';
import logo from '../../../assets/logo_img/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar" >

            <a href=""><img src={logo} className="logo"  alt="logo"/></a>

            <nav>
                <ul>
                    <li><a className="main-color" href="">Home</a></li>
                    <li><a className="main-color active" href="">Shop</a></li>
                    <li><a className="main-color product " href="">Product</a></li>
                    <li><a className="main-color" href="">Page</a></li>
                    <li><a className="main-color" href="">Blog</a></li>

                </ul>
            </nav>
            <div className="search-bar">
                <input  type="text"/>
                <img src={searchIcon} alt="search_icon"/>
            </div>
            <div>
                <img style={{marginLeft:'20px'}} src={cartIcon} alt="cartIcon"/>
            <a style={{marginRight:"30px", marginLeft:'5px',fontSize:'20px'}} className="main-color" href="">Cart</a>
            <img style={{height:'22px',width:'22px',marginLeft:'5px'}} src={profileIcon} alt="profile_icon"/>
                <a style={{marginLeft:"5px", fontSize:'20px'}} className="main-color" href="">Alex Priter</a>
            </div>


        </div>
    );
};

export default Navbar;