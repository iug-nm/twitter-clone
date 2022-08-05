/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Navbar() {
    return(
        <div id="navbar">
            <div id="site-logo">
                <a href='http://twitter.com'><img alt='logo' src='https://clipartcraft.com/images/white-twitter-logo-icon-8.png' /></a>
            </div>
            <div id="site-menu">
                <nav>
                    <a>Home</a>
                    <a>Notifications</a>
                    <a>Messages</a>
                    <a>Profile</a>
                    <a>Settings</a>
                </nav>
            </div>
            <div>
                <a>Tweet</a>
            </div>
            <div className='navbar-account'>
                <img alt='' src='https://cdn.pixabay.com/photo/2020/11/25/14/38/girl-5775940_960_720.jpg'/>
                <a>Julius in the Coolius</a>
                <h6>iug_nm</h6>
            </div>
        </div>
    )
}